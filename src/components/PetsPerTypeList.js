import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BackButton from "./BackButton";
import { getPetsPerType } from "../services/utils";

export default () => {
  const [pets, setPets] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getPetsPerType(type).then((pts) => setPets(pts));
  }, [type]);

  return (
    <>
      <p>Show all {type}</p>
      {
        // XXX: why does forEach not work here? Nothing is returned
        pets.map((pet) => (
          <div>
            <Link className="link" to={`/pets/${type}/${pet.id}`}>
                {pet.name} - {pet.breed}
            </Link>
          </div>
        ))
      }
      <BackButton />
    </>
  );
};
