import React, { createContext, useState, useEffect } from 'react'

export const StyleContext = createContext()

export const StyleContextProvider = ({ children }) => {
  const [colors, setColors] = useState({
    mainColor: '#8C3091',
    secondaryColor: '#5B5A4D',
    textColor: '#fff',
  })
  const [language, setLanguage] = useState('RU')
  const [minHeight, setMinHeight] = useState(800)
  useEffect(() => {
    const navbarHeight = 58
    const footerHeight = 60
    setMinHeight(
      document.documentElement.clientHeight - navbarHeight - footerHeight
    )
  }, [])
  return (
    <StyleContext.Provider
      value={{ colors, setColors, language, setLanguage, minHeight }}
    >
      {children}
    </StyleContext.Provider>
  )
}
