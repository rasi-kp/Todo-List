import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [toDos, setTodos] = useState([])
  const [todo, settodo] = useState('')
  const handleDelete = (id) => {
    setTodos(toDos.filter((todo) => todo.id != id))
  }
  const onclicked=()=>{
      if (todo.trim() !== '') {
          setTodos([...toDos, { id: Date.now(), text: todo, status: false }]);
          settodo('');
      }
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
        <input value={todo} onChange={(e) => settodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={onclicked} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((value, index) => {

          return (
            <>
              <div className="todo">
                <div className="left">

                  <input onChange={(e) => {
                    console.log(e.target.checked)
                    setTodos(toDos.filter(val => {
                      if (val.id === value.id) {
                        val.status = e.target.checked
                      }
                      return val
                    }))
                  }} value={value.status} type="checkbox" name="" id="" />
                  <h4 style={{ marginLeft: "10px" }}>{index + 1}.</h4>
                  <p> {value.text} </p>
                </div>
                <div className="right">
                  <i onClick={() => handleDelete(value.id)} className="fas fa-times"></i>
                </div>
              </div>
            </>
          )
        })}
        {
          toDos.map((val) => {
            if (val.status) {
              return (<h1>{val.text}</h1>)
            }
          })
        }
      </div>
    </div>
  );
}

export default App;