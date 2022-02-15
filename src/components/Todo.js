import { render } from "@testing-library/react";
import React, { useState } from "react";
import './todo.css'

const Todo = ({ todo, completeTask, deleteTask }) => {


  const handleCheckboxClick = () => completeTask(todo.id)

  const handleDelete = () => deleteTask(todo.id)


  return (
    <div className="todo">
      <input className="check-box"
        type="checkbox"
        onClick={handleCheckboxClick} />
      <li style={{ textDecoration: todo.done === true ? "line-through" : null }}>{todo.task}</li>
      <button className="delete-button"
        onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Todo;
