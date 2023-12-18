


import React, { useState, useEffect } from "react";

function Homeworld({ homeworldURL}) {
  const [planetName, setPlanetName] = useState("");

  useEffect(() => {
    const fetchHomeworld = async () => {
      try {
        const response = await fetch(homeworldURL);
        const data = await response.json();
        setPlanetName(data.name);
      } catch (error) {
        console.error("Error fetching homeworld:", error);
      }
    };

    fetchHomeworld();
  }, [homeworldURL]);

  return <span>{planetName}</span>;
}

export default Homeworld;
