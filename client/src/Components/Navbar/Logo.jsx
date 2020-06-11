import React, { useContext } from 'react'
import { Text } from '../reusableStyledComponents'
import styled from 'styled-components'
import LogoImg from '../Other/LogoImg'
import { StyleContext } from '../../contexts/StyleContext'

const LogoSC = styled.div`
  display: flex;
  align-items: center;
`

const Logo = () => {
  const { colors } = useContext(StyleContext)
  return (
    <LogoSC to='/'>
      <LogoImg
        square={colors.textColor}
        person={colors.textColor}
        height={50}
        width={40}
      />
      <Text textColor={colors.textColor}>Who Is That?</Text>
    </LogoSC>
  )
}

export default Logo
