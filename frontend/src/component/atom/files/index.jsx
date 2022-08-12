import React from 'react'

function Files(props) {
  return (
    <input className={"input "+props.class} type="file" {...props.formFunc}/>
  )
}

export default Files;