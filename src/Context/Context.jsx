import { createContext, useState } from 'react'

const Context = createContext()

const TodoContext = ({ children }) => {
  const [todos, setTodos] = useState([])

  function AddTodo(obj) {
    setTodos([...todos, obj])
  }

  return (
    <Context.Provider value={{ todos, setTodos, AddTodo }}>
      {children}
    </Context.Provider>
  )
}

export { Context, TodoContext }
