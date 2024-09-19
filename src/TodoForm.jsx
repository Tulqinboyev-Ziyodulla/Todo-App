import React, { useContext, useRef } from 'react'
import { Context } from './Context/Context'

function TodoForm() {
  const { todos, setTodos, AddTodo } = useContext(Context)
  const inputRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    const todo = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      title: inputRef.current.value,
      isComplated: false,
    }
    AddTodo(todo)
    e.target.reset()
  }

  return (
    <div className="flex justify-center items-center mt-20">
      <div className="w-full max-w-md p-8 bg-white border border-gray-300 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Todo App
        </h1>
        
        <form onSubmit={handleSubmit} className="flex gap-4 mb-6">
          <input
            type="text"
            ref={inputRef}
            placeholder="Add your todo"
            required
            name="todo"
            autoComplete="off"
            className="flex-grow bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            Add
          </button>
        </form>

        <div className="flex justify-between gap-5">
          <button className="w-full py-3 bg-gray-700 text-white rounded-lg text-sm font-medium hover:bg-gray-500 transition-colors duration-200">
            All (0)
          </button>
          <button className="w-full py-3 bg-gray-700 text-white rounded-lg text-sm font-medium hover:bg-gray-500 transition-colors duration-200">
            Completed (0)
          </button>
          <button className="w-full py-3 bg-gray-700 text-white rounded-lg text-sm font-medium hover:bg-gray-500 transition-colors duration-200">
            Uncompleted (0)
          </button>
        </div>
      </div>
    </div>
  )
}

export default TodoForm
