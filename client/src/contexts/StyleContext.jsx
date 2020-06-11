import React, { createContext, useState } from 'react'

export const StyleContext = createContext()

export const StyleContextProvider = ({ children }) => {
  const [colors, setColors] = useState({
    mainColor: '#8C3091',
    secondaryColor: '#5B5A4D',
    textColor: '#fff',
  })
  const [language, setLanguage] = useState('RU')
  return (
    <StyleContext.Provider value={{ colors, language, setLanguage }}>
      {children}
    </StyleContext.Provider>
  )
}
