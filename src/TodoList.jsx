import React, { useContext, useState, useEffect } from 'react'
import styled from "styled-components";
// import UpdateBtn from '../src/assets/images/update.svg'
// import DeleteBtn from '../src/assets/images/delete.svg'
import { Context } from './Context/Context'
import Modal from './Modal'

const TodoList = () => {
  const { todos, setTodos } = useContext(Context)
  const [isOpenModal, setisOpenModal] = useState(false)
  const [currentTodo, setCurrentTodo] = useState(null)

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos')
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos))
    }
  }, [setTodos])

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos))
    }
  }, [todos])

  function DeleteTodo(id) {
    const updatedTodos = todos.filter(item => item.id !== id)
    setTodos(updatedTodos)
  }

  function UpdateTodo(id) {
    const todoToEdit = todos.find(item => item.id === id)
    setCurrentTodo(todoToEdit)
    setisOpenModal(true)
  }

  function handleSave(updatedTitle) {
    const updatedTodos = todos.map(item =>
      item.id === currentTodo.id ? { ...item, title: updatedTitle } : item
    )
    setTodos(updatedTodos)
    setisOpenModal(false)
  }

  const StyledWrapper = styled.div`
  .bin-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: rgb(255, 95, 95);
  cursor: pointer;
  border: 2px solid rgb(255, 201, 201);
  transition-duration: 0.3s;
  position: relative;
  overflow: hidden;
}
.bin-bottom {
  width: 15px;
  z-index: 2;
}
.bin-top {
  width: 17px;
  transform-origin: right;
  transition-duration: 0.3s;
  z-index: 2;
}
.bin-button:hover .bin-top {
  transform: rotate(45deg);
}
.bin-button:hover {
  background-color: rgb(255, 0, 0);
}
.bin-button:active {
  transform: scale(0.9);
}
.garbage {
  position: absolute;
  width: 14px;
  height: auto;
  z-index: 1;
  opacity: 0;
  transition: all 0.3s;
}
.bin-button:hover .garbage {
  animation: throw 0.4s linear;
}
@keyframes throw {
  from {
    transform: translate(-400%, -700%);
    opacity: 0;
  }
  to {
    transform: translate(0%, 0%);
    opacity: 1;
  }
}

`;

  return (
    <>
      <ul className='w-[600px] mx-auto flex flex-col gap-5 mt-[50px]'>
        {todos.map((item, index) => (
          <li key={index} className='w-full bg-blue-500 text-white rounded-md p-[10px] flex justify-between'>
            <div className='flex gap-3'>
              <span>{index + 1}.</span>
              {item.title}
            </div>
            <div className='flex items-center gap-3'>
            <StyledWrapper>
      <button className="Btn" onClick={() => UpdateTodo(item.id)}>
        Edit
        <svg className="svg" viewBox="0 0 512 512">
          <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
        </svg>
      </button>
    </StyledWrapper>
                  <StyledWrapper>
      <button className="bin-button" onClick={() => DeleteTodo(item.id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 39 7"
          className="bin-top"
        >
          <line strokeWidth={4} stroke="white" y2="5" x2="39" y1="5" />
          <line
            strokeWidth={3}
            stroke="white"
            y2="1.5"
            x2="26.0357"
            y1="1.5"
            x1="12"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 33 39"
          className="bin-bottom"
        >
          <mask fill="white" id="path-1-inside-1_8_19">
            <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z" />
          </mask>
          <path
            mask="url(#path-1-inside-1_8_19)"
            fill="white"
            d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
          />
          <path strokeWidth={4} stroke="white" d="M12 6L12 29" />
          <path strokeWidth={4} stroke="white" d="M21 6V29" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 89 80"
          className="garbage"
        >
          <path
            fill="white"
            d="M20.5 10.5L37.5 15.5L42.5 11.5L51.5 12.5L68.75 0L72 11.5L79.5 12.5H88.5L87 22L68.75 31.5L75.5066 25L86 26L87 35.5L77.5 48L70.5 49.5L80 50L77.5 71.5L63.5 58.5L53.5 68.5L65.5 70.5L45.5 73L35.5 79.5L28 67L16 63L12 51.5L0 48L16 25L22.5 17L20.5 10.5Z"
          />
        </svg>
      </button>
    </StyledWrapper>
            </div>
          </li>
        ))}
      </ul>

      <Modal isOpenModal={isOpenModal} setisOpenModal={setisOpenModal}>
        <form onSubmit={(e) => {
          e.preventDefault()
          const updatedTitle = e.target.elements.todoTitle.value
          handleSave(updatedTitle)
        }}>
          <input
            type="text"
            name="todoTitle"
            defaultValue={currentTodo?.title}
            className="w-[79%] p-2 border border-gray-400 rounded-md text-xl outline-none"
            required
          />
          <button type="submit" className="w-[19%] ml-2 bg-green-500 text-white text-xl py-2 px-4 rounded-lg">
            Save
          </button>
        </form>
      </Modal>
    </>
  )
}

const StyledWrapper = styled.div`
  .Btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100px;
  height: 40px;
  border: none;
  padding: 0px 20px;
  background-color: rgb(168, 38, 255);
  color: white;
  font-weight: 500;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 5px 5px 0px rgb(140, 32, 212);
  transition-duration: .3s;
}

.svg {
  width: 13px;
  position: absolute;
  right: 0;
  margin-right: 20px;
  fill: white;
  transition-duration: .3s;
}

.Btn:hover {
  color: transparent;
}

.Btn:hover svg {
  right: 43%;
  margin: 0;
  padding: 0;
  border: none;
  transition-duration: .3s;
}

.Btn:active {
  transform: translate(3px , 3px);
  transition-duration: .3s;
  box-shadow: 2px 2px 0px rgb(140, 32, 212);
}
`;
export default TodoList

