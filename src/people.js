
import React, { useState, useEffect } from "react";
import "./people.css";
import { Character } from "./character";
import Species from "./species"; 
import Homeworld from "./planets";

export function People() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [vehicles, setVehicles] = useState([]);
  const [speciesList, setSpeciesList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/people/");
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchSpeciesData = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/species/");
        const data = await response.json();
        setSpeciesList(data.results);
      } catch (error) {
        console.error("Error fetching species data:", error);
      }
    };

    fetchSpeciesData();
  }, []);

  useEffect(() => {
    const fetchVehicles = async () => {
      if (selectedCharacter && selectedCharacter.vehicles.length > 0) {
        const vehicleRequests = selectedCharacter.vehicles.map(async (vehicleURL) => {
          const response = await fetch(vehicleURL);
          return response.json();
        });

        Promise.all(vehicleRequests)
          .then((vehicleData) => {
            setVehicles(vehicleData);
          })
          .catch((error) => {
            console.error("Error fetching vehicles:", error);
          });
      }
    };

    fetchVehicles();
  }, [selectedCharacter]);

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCharacter(null);
    setVehicles([]);
  };

  return (
    <div className="container_list">
      <div className="container_list_data">
        <ul className="list character_list"> {/* Aplicar la clase character_list al ul */}
          {characters.map((character, index) => (
            <li key={index} className="list_item" onClick={() => handleCharacterClick(character)}>
              <div className="character_container">
                <span>{character.name}</span>
                <Species character={character} speciesList={speciesList} /> from <Homeworld homeworldURL={character.homeworld} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {showModal && selectedCharacter && (
        <Character
          selectedCharacter={selectedCharacter}
          vehicles={vehicles}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
}
