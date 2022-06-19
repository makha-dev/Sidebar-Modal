import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [showModal, setShowModal] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);

    const openSidebar = () => {
        setShowSidebar(true);
    }
    
    const closeSidebar = () => {
        setShowSidebar(false);
    }

    const openModal = () => {
        setShowModal(true);
    }
    
    const closeModal = () => {
        setShowModal(false);
    }

    return <AppContext.Provider value={{
        showModal, showSidebar, openSidebar, closeSidebar, closeModal, openModal
    }}>{children}</AppContext.Provider>
}

export const useGlobal = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider}