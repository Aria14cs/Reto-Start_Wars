

import React from "react";
import "./character.css";

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function Character({ selectedCharacter, vehicles, handleCloseModal }) {
  return (
    <div className="container_character">
      {selectedCharacter && (
        <div className="selected_character">
          <div className="header">
            <h2>General Information</h2>
            <button onClick={handleCloseModal}>Cerrar</button>
          </div>
          <div className="character_info">
            <div className="character_attributes">
              <p className="capitalize">Eye color:  {capitalizeFirstLetter(selectedCharacter.eye_color)} </p>
              <p className="capitalize">Hair color: {capitalizeFirstLetter(selectedCharacter.hair_color)}</p>
              <p className="capitalize">Skin color: {capitalizeFirstLetter(selectedCharacter.skin_color)}</p>
              <p className="capitalize">Birth year: {selectedCharacter.birth_year}</p>
            </div>

    
          </div>
          <div className="vehicles_info">
            <h3>Vehicles </h3>
            <ul>
              {vehicles.map((vehicle, index) => (
                <li key={index}>{vehicle.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
