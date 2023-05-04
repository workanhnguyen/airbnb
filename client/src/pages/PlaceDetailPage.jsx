import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { BookingWidget } from '../components';
import { GOOGLE_MAP_QUERY, IMAGE_LOAD_BASE_URL } from "../constants";

const PlaceDetailPage = () => {
  const [place, setPlace] = useState(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
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
  else if (showAllPhotos) {
    return (
      <div className="absolute inset-0 text-white min-h-full">
        <div className="grid gap-4 p-8 bg-black">
          <div>
            <h2 className="text-3xl mr-40">Photos of {place.title}</h2>
            <button
              className="fixed right-8 top-8 flex gap-1 py-2 px-4 rounded-2xl bg-gray-500"
              onClick={() => setShowAllPhotos(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Close photos
            </button>
          </div>
          {place?.photos?.length > 0 &&
            place.photos.map((photo) => (
              <div key={photo}>
                <img src={`${IMAGE_LOAD_BASE_URL}/${photo}`} alt="photo" />
              </div>
            ))}
        </div>
      </div>
    );
  } else
    return (
      <div className="mt-8 bg-gray-100 -mx-8 px-8 pt-8">
        <h1 className="text-2xl">{place.title}</h1>
        <a
          href={`${GOOGLE_MAP_QUERY}${place.address}`}
          className="flex my-2 gap-1 block font-semibold underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>

          {place.address}
        </a>
        <div className="relative">
          <div className="grid grid-cols-[2fr_1fr] gap-2 rounded-3xl overflow-hidden">
            <div>
              {place.photos?.[0] && (
                <img
                  className="aspect-square object-cover cursor-pointer"
                  src={`${IMAGE_LOAD_BASE_URL}/${place.photos?.[0]}`}
                  alt="photo"
                  onClick={() => setShowAllPhotos(true)}
                />
              )}
            </div>
            <div className="grid overflow-hidden">
              {place.photos?.[1] && (
                <img
                  className="aspect-square object-cover cursor-pointer"
                  src={`${IMAGE_LOAD_BASE_URL}/${place.photos?.[1]}`}
                  alt="photo"
                  onClick={() => setShowAllPhotos(true)}
                />
              )}
              <div className="overflow-hidden">
                {place.photos?.[2] && (
                  <img
                    className="aspect-square object-cover cursor-pointer relative top-2"
                    src={`${IMAGE_LOAD_BASE_URL}/${place.photos?.[2]}`}
                    alt="photo"
                    onClick={() => setShowAllPhotos(true)}
                  />
                )}
              </div>
            </div>
          </div>
          <button
            onClick={() => setShowAllPhotos(true)}
            className="flex items-center gap-1 absolute bottom-2 right-2 px-4 py-2 bg-white rounded-2xl shadow shadow-gray-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                clipRule="evenodd"
              />
            </svg>
            Show more photos
          </button>
        </div>
        <div className="mb-8 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
          <div>
            <div className="my-4">
              <h2 className="font-semibold text-2xl">Description</h2>
              {place.description}
            </div>
            Check-in: {place.checkIn}<br/>
            Check-out: {place.checkOut}<br/>
            Max number of guests: {place.maxGuests}           
          </div>
          <div>
            <BookingWidget place={place} />
          </div>
        </div>
        <div className="bg-white -mx-8 p-8 border-t">
          <h2 className="mt-4 font-semibold text-2xl">Extra Information</h2>
          <p className="mb-4 mt-2 text-sm text-gray-700 leading-5">{place.extraInfo}</p>
        </div>
      </div>
    );
};

export default PlaceDetailPage;
