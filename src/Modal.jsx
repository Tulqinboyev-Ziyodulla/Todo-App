import React from 'react'

const Modal = ({ children, isOpenModal, setisOpenModal }) => {
  return (
    <div
      onClick={(e) => e.target.id === "wrapper" ? setisOpenModal(false) : null}
      id='wrapper'
      className={`${isOpenModal ? "scale-100" : "scale-0"} duration-300 fixed top-0 bottom-0 right-0 left-0 backdrop-blur-md`}
    >
      <div className='w-[600px] bg-blue-500 mx-auto p-5 mt-[100px] rounded-xl'>
        {children}
      </div>
    </div>
  )
}

export default Modal
