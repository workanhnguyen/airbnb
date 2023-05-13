import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AddressLink, BookingDate, PlaceGallery } from "../components";

const BookingPage = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  useEffect(() => {
    if (id) {
      axios.get("/bookings").then((response) => {
        const foundBooking = response.data.find(({ _id }) => _id === id);
        if (foundBooking) {
          setBooking(foundBooking);
        }
      });
    }
  }, [id]);

  if (!booking) return;
  return (
    <div className="my-8">
      <h1 className="text-2xl">{booking.place.title}</h1>
      <AddressLink address={booking.place.address} />
      <div className="bg-gray-200 p-6 mb-6 rounded-2xl flex justify-between items-center">
        <div>
          <h2 className="text-2xl mb-4">Your booking information</h2>
          <BookingDate booking={booking} />
        </div>
        <div className="bg-primary p-6 text-white rounded-2xl">
            <div>Total price:</div>
            <div className="text-3xl">${booking.price}</div>
        </div>
      </div>
      <PlaceGallery place={booking.place} />
    </div>
  );
};

export default BookingPage;
