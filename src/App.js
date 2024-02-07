import React from 'react';
import './App.css';
import { useState } from 'react';
import Inputfield from './component/Input'

function App() {
  const [toDos, setTodos] = useState([])
  const handleDelete = (id) => {
    setTodos(toDos.filter((todo) => todo.id != id))
  }
  //add component
  const click=(e,value)=>{
      setTodos(toDos.filter(val => {
        if (val.id === value.id) {
          val.status = e.target.checked
        }
        return val
      }))
    }
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Hi ,How are you 🌝 ☕ </h2>
      </div>
      <div className="input">
        <Inputfield  setData={setTodos}/>
      </div>
      <div className="todos" >
        {toDos.map((value, index) => (
              <div className="todo" key={value.id}>
                <div className="left">
                  <input onChange={(e)=>click(e,value)} value={value.status} type="checkbox" name="" id="" />
                  <h4 style={{ marginLeft: "10px" }}>{index + 1}.</h4>
                  <p> {value.text} </p>
                </div>
                <div className="right">
                  <i onClick={() => handleDelete(value.id)} className="fas fa-times"></i>
                </div>
              </div>
        ))}
        {
          toDos.map((val) => {
            if (val.status) {
              return (<h1 key={val.id}>{val.text}</h1>)
            }
            return null;
          })
        }
      </div>
    </div>
  );
}

export default App;