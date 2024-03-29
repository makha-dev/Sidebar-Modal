import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext, useGlobal } from './context'

const Home = () => {
  const {openSidebar, openModal} = useGlobal();
  return (
  <main>
    <button className="sidebar-toggle" onClick={openSidebar}>
      <FaBars></FaBars>
    </button>
    <button className='btn' onClick={openModal}>
      Show Modal
    </button>
  </main>
  );
}

export default Home
