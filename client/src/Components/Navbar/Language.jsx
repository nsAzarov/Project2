import React, { useContext } from 'react'
import styled from 'styled-components'
import { StyleContext } from '../../contexts/StyleContext'

const LanguageSC = styled.div`
  display: flex;
  margin-right: 60px;
  color: ${(props) => props.textColor};
`

const Btn = styled.div`
  cursor: pointer;
`

const Language = () => {
  const { colors, setLanguage } = useContext(StyleContext)
  return (
    <LanguageSC textColor={colors.textColor}>
      <Btn onClick={() => setLanguage('RU')}>RU</Btn>/
      <Btn onClick={() => setLanguage('EN')}>EN</Btn>
    </LanguageSC>
  )
}

export default Language
