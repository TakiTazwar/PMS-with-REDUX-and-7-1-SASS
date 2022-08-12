import React from 'react';

function Label(props) {
  return (
    <label className={"label "+props.class}>{props.name}</label>
  )
}

export default Label;