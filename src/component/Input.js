import React, { useState } from 'react';

function Input({ setData }) {
  const [toDos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const onClicked = () => {
    if (todo.trim() !== '') {
      const newTodo = { id: Date.now(), text: todo, status: false };
      setTodos([...toDos, newTodo]);
      setData([...toDos, newTodo]);
      setTodo('');
    }
  };

  return (
    <>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="🖊️ Add item..."
      />
      <i onClick={onClicked} className="fas fa-plus"></i>
    </>
  );
}

export default Input;
