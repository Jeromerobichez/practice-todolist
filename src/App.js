import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import './App.css';
import TodoForm from './components/Todoform';
import Todo from './components/Todo';
import TodoList from './components/TodoList';

const LOCAL_STORAGE_KEY = "my-todos"
function App() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storageTodos) {
      setTodos(storageTodos)

    }
  }, [])
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])
  const addTodo = (todo) => {
    setTodos([todo, ...todos])
  }
  const completeTask = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done
          }
        }
        else {
          return item;
        }
      })
    )
  }
  const deleteTask = (id) => {
    setTodos(todos.filter((item) => item.id !== id))
  }

  return (
    <div className="App">
      <h1>Please, enter here the stuff to do :</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} completeTask={completeTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
