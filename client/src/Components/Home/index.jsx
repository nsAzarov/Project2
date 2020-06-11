import React from 'react'
import Navbar from '../Navbar/Navbar'
import Main from './Main'
import Footer from '../Footer/Footer'
import { StyleContextProvider } from '../../contexts/StyleContext'

const Home = () => {
  return (
    <StyleContextProvider>
      <Navbar />
      <Main />
      <Footer />
    </StyleContextProvider>
  )
}

export default Home
