import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

import { IMAGE_LOAD_BASE_URL } from '../constants';

const IndexPage = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get('show-places').then(({ data }) => {
      setPlaces(data);
    })
  }, [])

  return (
    <div className="gap-x-6 gap-y-8 mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {places.length > 0 && places.map((place, index) => (
        <Link to={'/place/' + place._id} key={index} >
          <div className="flex bg-gray-500 mb-2 rounded-2xl">
            {place.photos?.[0] && (
              <img className="rounded-2xl object-cover aspect-square" src={IMAGE_LOAD_BASE_URL + '/' + place.photos?.[0]} alt="photo" />
            )}
          </div>
          <h2 className="font-bold">{place.address}</h2>
          <h3 className="text-sm text-gray-500">{place.title}</h3>
          <div className="mt-1">
            <span className="font-bold">${place.price} per night</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default IndexPage;
