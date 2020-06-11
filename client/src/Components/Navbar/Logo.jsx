import React from 'react'
import { Link } from 'react-router-dom'
import { textColor } from '../../variables'
import styled from 'styled-components'
import LogoImg from './LogoImg'

const Text = styled.div`
  color: ${(props) => props.textColor};
`

const LogoSC = styled(Link)`
  display: flex;
  align-items: center;
`

const Logo = () => {
  return (
    <LogoSC to='/'>
      <LogoImg />
      <Text textColor={textColor}>Who Is That?</Text>
    </LogoSC>
  )
}

export default Logo
