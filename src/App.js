import { useState } from "react";
import Addtodo from "./components/Addtodo";
import Listtodo from "./components/Listtodo";

function App() {

  const[todo,settodo] = useState([])

  const getitem = (item) =>{
    console.log(item)
    settodo((prevState)=>{
      return [...prevState,item]
    })
  }
  const getcompleted = (id) =>{
    settodo((prevState)=>{
      return prevState.filter((item, index)=>{
        return index !== id;
      })
    })
  }

  return (
    <div className="App">
      <Addtodo item={getitem}/>
      {todo && todo.map((todo, index) =>(
        <Listtodo id={index} item={todo} completed={getcompleted}/>
      ))}
    </div>
  );
}

export default App;