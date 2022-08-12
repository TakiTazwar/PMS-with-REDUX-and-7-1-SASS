import React from 'react'

function Input(props) {
  return (
    <input defaultValue={props.prevVal} className={"input "+props.class}  placeholder={props.name} type="text" {...props.formFunc}/>
  )
}

export default Input;