import React, { useState, useEffect } from "react";
import { Loading } from './loading';
import { Failed } from './failed';
import { People } from './people';
import './loaded.css';

function Loaded() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [showFailed, setShowFailed] = useState(true); // Nuevo estado para mostrar 'Failed' durante unos segundos

  useEffect(() => {
    // Simulación de carga que puede fallar después de 2 segundos
    const timer = setTimeout(() => {
      setLoading(false); // Simulación de fin de carga
      setError(true); // Simulación de carga fallida
      setShowFailed(false); // Ocultar 'Failed' después de 3 segundos
    }, 2000);

    return () => clearTimeout(timer); // Limpia el temporizador al desmontar el componente
  }, []);

  useEffect(() => {
    if (!showFailed) {
      // Simulación de carga de datos de 'People' después de que se oculte 'Failed'
      const dataTimer = setTimeout(() => {
        setError(false); // Simulación de carga exitosa
        setLoading(false); // Carga completada
      }, 3000); // Simulación de carga de 'People' después de 3 segundos

      return () => clearTimeout(dataTimer); // Limpia el temporizador al desmontar el componente
    }
  }, [showFailed]);

  return (
    <div className="container">
      
      <div>
        {error && showFailed ? (
          <Failed /> // Muestra la vista de 'Failed' si hay un error y se está mostrando 'Failed'
        ) : loading ? (
          <Loading /> // Muestra la vista inicial mientras se carga
        ) : (
          <People /> // Muestra la vista de 'People' después de una carga exitosa
        )}
      </div>
    </div>
  );
}

export default Loaded;
