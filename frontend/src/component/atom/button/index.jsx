import React from 'react'

function ButtonClick(props) {
  return (
    <button onClick={props.clickFun} className={"button "+props.class} value={props.val}>{props.name} </button>
  )
}

export default ButtonClick;