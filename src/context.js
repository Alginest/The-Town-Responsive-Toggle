import React, { useContext, useState } from 'react'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [showNav, setShowNav] = useState(false)

  const toggleNav = () => {
    setShowNav(!showNav)
  }
  return (
    <AppContext.Provider value={{ toggleNav, showNav }}>
      {children}
    </AppContext.Provider>
  )
}

//hooke

export const useGlobalContext = () => {
  return useContext(AppContext)
}
