import React, { useState } from 'react'
import "./Addtodo.css";

const Addtodo = (props) => {
  const [item, setitem] = useState("")
  const handleChange = (e) =>{
    setitem(e.target.value);
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    props.item(item)
  }
  return (
    <> 
      <form method="post" onSubmit={handleSubmit}>
          <input type="text" name="item" value={item} onChange={handleChange} placeholder="Add new Todo" size="50" className="a"/>
          <button type="submit">Add</button>
      </form>
    </>
  )
}

export default Addtodo