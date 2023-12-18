
import React from "react";

function Species({ character, speciesList }) {
  const getCharacterSpecies = () => {
    if (character && character.species.length > 0) {
      const characterSpecies = character.species.map((speciesURL) => {
        const foundSpecies = speciesList.find((species) => species.url === speciesURL);
        return foundSpecies ? foundSpecies.name : "Human";
      });
      return characterSpecies.join(', '); // Join multiple species if exist
    }
    return "Human";
  };

  return (
    <div className="species-info">
      <span>{getCharacterSpecies()}</span>
    </div>
  );
}

export default Species;
