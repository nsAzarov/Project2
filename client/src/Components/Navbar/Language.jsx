import React, { useContext } from 'react'
import styled from 'styled-components'
import { StyleContext } from '../../contexts/StyleContext'

const LanguageSC = styled.div`
  display: flex;
  color: ${(props) => props.textColor};
  margin-right: 15px;
`

const Btn = styled.div`
  cursor: pointer;
`

const Language = () => {
  const { colors, changeLanguage } = useContext(StyleContext)
  return (
    <LanguageSC textColor={colors.textColor}>
      <Btn onClick={() => changeLanguage('RU')}>RU</Btn>/
      <Btn onClick={() => changeLanguage('EN')}>EN</Btn>
    </LanguageSC>
  )
}

export default Language
