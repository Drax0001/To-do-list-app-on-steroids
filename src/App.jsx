import React from 'react'
import Tasks from "./components/Tasks"
import TaskInfo from "./components/TaskInfo"
import Berthold from "./components/Berthold"

export default function App() {
  const [todos, setTodos] = React.useState([])
  const [todo, setTodo] = React.useState({
    body: '',
    priority: ''
  })

  function handleChange(e) {
    const value = e.target.value
    setTodo(prevTodo => ({
      ...prevTodo,
      body: value
    }))
  }

  function handleSelect(e) {
    const value = e.target.value
    setTodo(prevTodo => ({
      ...prevTodo,
      priority: value
    }))
  }

  function handleClick() {
    todo.priority==='High'?setTodos(prevTodos => [todo, ...prevTodos]):setTodos(prevTodos => [...prevTodos, todo])
    setTodo(prevTodo => ({
      ...prevTodo,
      body: '',
      priority: ''
    }))
  }

  function deleteItem(toDelete) {
    const updatedItems = todos.filter(todoItem => todoItem.body !== toDelete)
    setTodos(updatedItems)
  }

  const taskElements = todos.map(todoItem => {
    return(
      <Tasks
        key = {todoItem.body}
        task = {todoItem.body} 
        deleteItem = {deleteItem}
        priority = {todoItem.priority}
        todo={todo.body}
      />
    )
  })

  return (
    <>
      <Berthold/>
      <div className="container mx-auto p-6 mt-20 grid place-items-center">
        <h1 className="text-center font-cursive m-0 text-9xl text-primary">To-Do List 📝</h1>
        
        <TaskInfo
        key={todo.body}
        todoItem={todo.body}
        priority = {todo.priority}
        handleTodoChange={handleChange}
        handleAddClick={handleClick}
        handleSelectPriority={handleSelect}
        />

      {taskElements}
      </div>
    </>
  )
}