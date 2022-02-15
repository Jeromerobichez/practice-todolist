import { render } from "@testing-library/react";
import React, {useState} from "react";
import {v4 as uuid} from "uuid";
import './todoform.css'
 
const TodoForm = ({addTodo}) => {
    const [todo, setTodo] = useState({
        id: '',
        task: '',
        done: false
    })

    const handleInputChange = (e) => {
        setTodo( { ...todo, task: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({...todo, id: uuid() })
            setTodo({...todo, task: ""})
        }
    }
    render()
    return (
       <form  onSubmit={handleSubmit}>
           <input
           type="text"
           name="text"
          value={todo.task}
           onChange={handleInputChange} />
         
        <button type="submit"
           value="submit"
           className="submit-button">Submit the task</button>
           </form>
    )
}

export default TodoForm;
