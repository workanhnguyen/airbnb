import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { PlacesForm } from "../components";
import { IMAGE_LOAD_BASE_URL } from "../constants";

const PlacesPage = () => {
  const [places, setPlaces] = useState([]);
  const { action } = useParams();

  useEffect(() => {
    axios.get("/places").then(({ data }) => {
      setPlaces(data);
    });
  }, []);
  
  return (
    <>
      {action === undefined && (
        <>
          <div className="text-center">
            <Link
              to={"/account/places/new"}
              className="inline-flex gap-1 bg-primary text-white text-center py-2 px-6 rounded-full"
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
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Add new place
            </Link>
          </div>
          <div className="mt-4">
            {places.length > 0 && places.map(place => (
              <Link to={'/account/places/detail/' + place._id} key={place._id} className="flex cursor-pointer gap-4 bg-gray-100 p-4 rounded-2xl mb-2">
                <div className="w-32 h-32 bg-gray-300 shrink-0">
                  {place.photos.length > 0 && (
                    <img className="w-full h-full object-scale-down" src={IMAGE_LOAD_BASE_URL + '/' + place.photos[0]} alt="photo" />
                  )}
                </div>
                <div className=" grow shrink">
                  <h2 className="text-xl font-bold">{place.title}</h2>
                  <p className="text-sm mt-2">{place.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
      {(action === "new" || action === "detail") && (
        <div>
          <PlacesForm />
        </div>
      )}
    </>
  );
};

export default PlacesPage;
