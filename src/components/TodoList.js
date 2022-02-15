import { render } from "@testing-library/react";
import React, { useState } from "react";
import Todo from './Todo'
import './todolist.css'
const TodoList = ({ todos, completeTask, deleteTask }) => {

    render()
    return (
        <div className="todo-list">

            <ul>
                {todos.map((todo, i) =>
                    <Todo key={todo.id}
                        todo={todo}
                        completeTask={completeTask}
                        deleteTask={deleteTask} />)}

            </ul>


        </div>
    )
}

export default TodoList;
