import React, { useState } from "react";
import ToDoItem from "../toDoItem/toDoItem";
import "./style.css";

function Todo() {
  const [state, setState] = useState([
    { id: 1, name: "play" },
    { id: 2, name: "study" },
    { id: 3, name: "code" },
  ]);

  const submitHandler = (e) => {
    e.preventDefault();
    let inp = e.target.task.value;
    if (inp) {
      let newObj = { id: state.length + 1, name: inp };
      setState([...state, newObj]);
    }
  };

  const handleDelete = (i) => {
    let filtered = state.filter((item) => item.id !== i);
    setState(filtered);
  };

  const handleEdit = (i) => {
    let newValue = prompt("Edit this task:");
    let mine = state.map((item,index) => {
      if(index==i-1) item.name=newValue;
      return item;
    });
    setState(mine);
  };

  return (
    <div className="todo">
      <form onSubmit={submitHandler}>
        <input type="text" name="task" />
        <button>Add Task</button>
      </form>
      <h1>To Do List:</h1>
      <ul>
        {state.map((todo, i) => (
          <ToDoItem
            task={todo}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            key={i}
          />
        ))}
      </ul>
    </div>
  );
}

export default Todo;
