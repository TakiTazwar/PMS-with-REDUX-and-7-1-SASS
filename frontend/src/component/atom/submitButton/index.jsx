import React from 'react';
import '../../../style/main.css';

function Button(props) {
  return (
    <input value={props.name} className={'button '+props.class} type="submit" />
  )
}

export default Button;