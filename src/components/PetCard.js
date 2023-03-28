import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import BackButton from "./BackButton";
import { getSinglePet } from "../services/utils";

export default () => {
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const { type, id } = useParams();

  useEffect(() => {
    getSinglePet(type, id).then((pt) => { 
      console.log(pt);
      console.log("Hello from getSinglePet");
      setPet(pt);
      setLoading(false);
    });
  }, [pet]);

  // conditional rendering
  // rem: jsx does not support "if" statement; either ternary operator or boolean evaluation is to be used
  return (
    <>
      {loading ? (
        <div>loading</div>
      ) : (
        <div className="container">
          <h3>{pet.name}</h3>
          <img src={pet.url} alt={pet.name} width="400"/>
          <ul>
            <li>Age: {pet.age}</li>
            <li>Breed: {pet.breed}</li>
            <li>Details: {pet.description}</li>
          </ul>
          <BackButton />
        </div>
      )}
    </>
  );
};
