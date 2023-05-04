import React, { useState } from "react";
import { differenceInCalendarDays } from 'date-fns';

const BookingWidget = ({ place }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);

  let numberOfNights = 0;
  if (checkIn && checkOut) {
    numberOfNights = differenceInCalendarDays(new Date(checkIn), new Date(checkOut));
  }


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
          </div>
        </div>
        <button className="primary mt-4">
          Book this place
          {numberOfNights > 0 && (
            <span>${numberOfNights * place.price}</span>
          )}
        </button>
      </div>
    </>
  );
};

export default BookingWidget;
