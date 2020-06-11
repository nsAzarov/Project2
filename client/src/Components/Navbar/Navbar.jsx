import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Language from './Language'
import { mainColor } from '../../variables'

const NavbarSC = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.mainColor};
`

const Navbar = () => {
  return (
    <NavbarSC mainColor={mainColor}>
      <Logo />
      <Language />
    </NavbarSC>
  )
}

export default Navbar
