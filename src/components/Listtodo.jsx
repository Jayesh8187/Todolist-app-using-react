import React from 'react'
import "./Listtodo.css"

const Listtodo = (props) => {
  return (
    <>
        <div className="flex">
            <input type="checkbox" onChange={()=>props.completed(props.id)}/> 
            <pre> {props.item}</pre>
        </div>
    </>
  )
}

export default Listtodo