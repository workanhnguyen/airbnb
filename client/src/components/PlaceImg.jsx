import React from "react";

import { IMAGE_LOAD_BASE_URL } from "../constants";

const PlaceImg = ({ place, className }) => {
  if (!place.photos?.length) return;
  return (
    <>
      {place.photos.length > 0 && (
        <img
          className={className}
          src={IMAGE_LOAD_BASE_URL + "/" + place.photos[0]}
          alt="photo"
        />
      )}
    </>
  );
};

export default PlaceImg;
