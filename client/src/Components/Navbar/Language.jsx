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
  const { colors } = useContext(StyleContext)
  const changeLanguage = (lang) => {
    alert('Переключение языка временно недоступно')
  }
  return (
    <LanguageSC textColor={colors.textColor}>
      <Btn onClick={() => changeLanguage('RU')}>RU</Btn>/
      <Btn onClick={() => changeLanguage('EN')}>EN</Btn>
    </LanguageSC>
  )
}

export default Language
