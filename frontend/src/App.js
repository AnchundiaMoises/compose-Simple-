import React, { useState, useEffect } from 'react';

import ConceptoInput from './components/conceptos/ConceptoInput';
import CourseConceptos from './components/conceptos/CourseConceptos';
import ErrorAlert from './components/UI/ErrorAlert';

function App() {
  const [loadedConceptos, setLoadedConceptos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      setIsLoading(true);

      try {
        const response = await fetch('http://localhost/conceptos');

        const resData = await response.json();

        if (!response.ok) {
          throw new Error(resData.message || 'Fetching the conceptos failed.');
        }

        setLoadedConceptos(resData.conceptos);
      } catch (error) {
        setError(
          error.message ||
            'Fetching conceptos failed - the server responsed with an error.'
        );
      }
      setIsLoading(false);
    }

    fetchData();
  }, []);

  async function addConceptoHandler(conceptoDescripcion) {
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost/conceptos', {
        method: 'POST',
        body: JSON.stringify({
          descripcion: conceptoDescripcion,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.message || 'Adding the concepto failed.');
      }

      setLoadedConceptos((prevConceptos) => {
        const updatedConceptos = [
          {
            id: resData.concepto.id,
            descripcion: conceptoDescripcion,
          },
          ...prevConceptos,
        ];
        return updatedConceptos;
      });
    } catch (error) {
      setError(
        error.message ||
          'Adding a concepto failed - the server responsed with an error.'
      );
    }
    setIsLoading(false);
  }

  async function deleteConceptoHandler(conceptoId) {
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost/conceptos/' + conceptoId, {
        method: 'DELETE',
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.message || 'Deleting the concepto failed.');
      }

      setLoadedConceptos((prevConceptos) => {
        const updatedConceptos = prevConceptos.filter((concepto) => concepto.id !== conceptoId);
        return updatedConceptos;
      });
    } catch (error) {
      setError(
        error.message ||
          'Deleting the concepto failed - the server responsed with an error.'
      );
    }
    setIsLoading(false);
  }

  return (
    <div>
     
      <ConceptoInput onAddConcepto={addConceptoHandler} />
      {!isLoading && (
        <CourseConceptos conceptos={loadedConceptos} onDeleteConcepto={deleteConceptoHandler} />
      )}
    </div>
  );
}

export default App;
