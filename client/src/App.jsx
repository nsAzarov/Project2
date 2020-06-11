import React from 'react'
import Main from './Components/Home'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import { StyleContextProvider } from './contexts/StyleContext'

const App = () => {
  return (
    <StyleContextProvider>
      <Navbar />
      <Main />
      <Footer />
    </StyleContextProvider>
  )
}

export default App
