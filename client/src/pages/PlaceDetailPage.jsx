import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PlaceDetailPage = () => {
  const [place, setPlace] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return; 
    axios.get(`/place/${id}`).then(({ data }) => {
        setPlace(data);
    })
  }, [id])
  

  return (
    <div className="mt-8">
      <h1>{place.title}</h1>
    </div>
  );
};

export default PlaceDetailPage;
