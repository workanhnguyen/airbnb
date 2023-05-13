import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { AddressLink, BookingWidget, PlaceGallery } from "../components";

const PlaceDetailPage = () => {
  const [place, setPlace] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    axios.get(`/place/${id}`).then(({ data }) => {
      setPlace(data);
    });
  }, [id]);

  // Because of slowness of loading data, we have to have this code below
  // to ensure that UI is always rendered
  if (!place) return;
  else
    return (
      <div className="mt-8 bg-gray-100 -mx-8 px-8 pt-8">
        <h1 className="text-2xl">{place.title}</h1>
        <AddressLink address={place.address} />
        <PlaceGallery place={place} />
        <div className="mb-8 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
          <div>
            <div className="my-4">
              <h2 className="font-semibold text-2xl">Description</h2>
              {place.description}
            </div>
            Check-in: {place.checkIn}
            <br />
            Check-out: {place.checkOut}
            <br />
            Max number of guests: {place.maxGuests}
          </div>
          <div>
            <BookingWidget place={place} />
          </div>
        </div>
        <div className="bg-white -mx-8 p-8 border-t">
          <h2 className="mt-4 font-semibold text-2xl">Extra Information</h2>
          <p className="mb-4 mt-2 text-sm text-gray-700 leading-5">
            {place.extraInfo}
          </p>
        </div>
      </div>
    );
};

export default PlaceDetailPage;
