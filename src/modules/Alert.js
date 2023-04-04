import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height: "70px"}}>
   {props.alert && <div class={`alert alert-${props.alert.type} fade show`} role="alert">
        {props.alert.type + " : "+props.alert.message}
        
    </div>}
    </div>
  )
}
