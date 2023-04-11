import React, { useState } from 'react';

import './ConceptoInput.css';
import Card from '../UI/Card';

function ConceptoInput(props) {
  const [enteredConceptoDescripcion, setEnteredConceptoDescripcion] = useState('');

  function updateConceptoDescripcionHandler(event) {
    setEnteredConceptoDescripcion(event.target.value);
  }

  function conceptoSubmitHandler(event) {
    event.preventDefault();

    if (enteredConceptoDescripcion.trim().length === 0) {
      alert('Invalid text - please enter a longer one!');
      return;
    }

    props.onAddConcepto(enteredConceptoDescripcion);

    setEnteredConceptoDescripcion('');
  }

  return (
    <section id='concepto-input'>
      <Card>
        <form onSubmit={conceptoSubmitHandler}>
          <label htmlFor='text'>Mantenimientos Autos</label>
          <input
            type='text'
            id='descripcion'
            value={enteredConceptoDescripcion}
            onChange={updateConceptoDescripcionHandler}
          />
          <button>Agregar Concepto</button>
        </form>
      </Card>
    </section>
  );
}

export default ConceptoInput;
