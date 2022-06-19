import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobal } from './context'
const Modal = () => {
  const {showModal, closeModal} = useGlobal();
  return (
    <div className={`modal-overlay ${showModal && 'show-modal'}`}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  )
}

export default Modal
