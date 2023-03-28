import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import BackButton from "./BackButton";
import { getPetTypes } from "../services/utils";

export default () => {
  const [petTypes, setPetTypes] = useState([]);

  useEffect(() => {
    getPetTypes().then((types) => setPetTypes(types));
  }, []);

  return (
    <>
      <p>Browse through the links below to find your new furry friend: </p>
      {
        // XXX: why does forEach not work here? Nothing is returned
        petTypes.map((type) => (
          <div>
            {/* Capitalize first letter of each word for output */}
            <Link className="link" to={`/pets/${type}`}>{type.charAt(0).toUpperCase() + type.slice(1)}</Link>
          </div>
        ))
      }
      <BackButton className="backButton" />
    </>
  );
};
