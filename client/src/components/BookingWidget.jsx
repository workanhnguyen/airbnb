import React, { useEffect, useState, useContext } from "react";
import { differenceInCalendarDays } from 'date-fns';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import { UserContext } from "../contexts/UserContext";

const BookingWidget = ({ place }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [numberOfNights, setNumberOfNights] = useState(0);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    setName(user.name);
  }, [user]);

  useEffect(() => {
    if (checkIn && checkOut) {
      setNumberOfNights(differenceInCalendarDays(new Date(checkOut), new Date(checkIn)));
    }
  }, [checkIn, checkOut]);

  const bookThisPlace = async () => {
    const bookingData = { 
      place: place._id,
      checkIn, 
      checkOut, 
      numberOfGuests, 
      name, 
      phoneNumber,
      price: numberOfNights * place.price,
    };
    const { data } = await axios.post('/bookings', bookingData)
    const bookingId = data._id;
    navigate('/accounts/bookings/' + bookingId);
  };

  return (
    <>
      <div className="bg-white shadow p-4 mt-4 rounded-2xl">
        <div className="text-2xl text-center">
          Price: ${place.price} / per night
        </div>
        <div className="border rounded-2xl mt-4">
          <div className="flex">
            <div className="px-3 py-4">
              <label>Check in:</label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>
            <div className="px-3 py-4 border-l">
              <label>Check out:</label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="px-3 py-4 border-t">
              <label>Number of guests:</label>
              <input
                type="number"
                value={numberOfGuests}
                onChange={(e) => setNumberOfGuests(e.target.value)}
              />
            </div>
            {numberOfNights > 0 && (
              <div className="px-3 py-4 border-t">
                <label>Your full name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label>Your phone number</label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <label>Your email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            )}
          </div>
        </div>
        <button onClick={bookThisPlace} className="primary mt-4">
          Book this place &nbsp;
          {numberOfNights > 0 && (
            <span>${numberOfNights * place.price}</span>
          )}
        </button>
      </div>
    </>
  );
};

export default BookingWidget;
