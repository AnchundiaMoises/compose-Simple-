import React from 'react';

import './ConceptoItem.css';

function ConceptoItem(props) {
  return <li className="concepto-item" onClick={props.onDelete.bind(null, props.id)}>{props.descripcion}</li>;
}

export default ConceptoItem;
