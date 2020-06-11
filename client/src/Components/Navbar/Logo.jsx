import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Text } from '../reusableStyledComponents'
import styled from 'styled-components'
import LogoImg from './LogoImg'
import { StyleContext } from '../../contexts/StyleContext'

const LogoSC = styled(Link)`
  display: flex;
  align-items: center;
`

const Logo = () => {
  const { colors } = useContext(StyleContext)
  return (
    <LogoSC to='/'>
      <LogoImg />
      <Text textColor={colors.textColor}>Who Is That?</Text>
    </LogoSC>
  )
}

export default Logo
