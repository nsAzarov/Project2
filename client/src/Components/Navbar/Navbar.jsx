import React, { useContext } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Language from './Language'
import { StyleContext } from '../../contexts/StyleContext'

const NavbarSC = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.mainColor};
`

const Navbar = () => {
  const { colors } = useContext(StyleContext)
  return (
    <NavbarSC mainColor={colors.mainColor}>
      <Logo />
      <Language />
    </NavbarSC>
  )
}

export default Navbar
