import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [toDos,setTodos]=useState([])
  const [todo,settodo]=useState('')
  const handleDelete=(id)=>{
    setTodos(toDos.filter((todo)=>todo.id!=id))
  }
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={todo} onChange={(e)=>settodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...toDos,{id:Date.now(), text:todo,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
      { toDos.map((value)=>{

      return ( <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.checked)
              setTodos(toDos.filter(val=>{
                if(val.id===value.id){
                  val.status=e.target.checked
                }
                return val
              }))
            }} value={value.status} type="checkbox" name="" id="" />
            <p>{value.text}</p>
          </div>
          <div className="right">
            <i onClick={() => handleDelete(value.id)} className="fas fa-times"></i>
          </div>
        </div> )
      }) }
      {toDos.map((val)=>{
        if(val.status){
          return(<h1>{val.text}</h1>)
        }
      })}
      </div>
    </div>
  );
}

export default App;