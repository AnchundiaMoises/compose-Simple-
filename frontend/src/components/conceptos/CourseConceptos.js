import React from 'react';

import './CourseConceptos.css';
import Card from '../UI/Card';
import ConceptoItem from './ConceptoItem';

function CourseConceptos(props) {
  const hasNoConceptos = !props.conceptos || props.conceptos.length === 0;

  return (
    <section id='course-conceptos'>
      <Card>
        <h2>Mis Conceptos</h2>
        {hasNoConceptos && <h2>No se encontraron conceptos. ¡Empieza a añadir algunos!</h2>}
        <ul>
          {props.conceptos.map((concepto) => (
            <ConceptoItem
              key={concepto.id}
              id={concepto.id}
              descripcion={concepto.descripcion}
              onDelete={props.onDeleteConcepto}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
}

export default CourseConceptos;
