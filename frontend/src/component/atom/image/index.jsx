import React from 'react'

function Image(props) {
  return (
    <img className={"img "+props.class}  alt={props.name}  src={"http://localhost:5000/"+props.url}/>
  )
}

export default Image;