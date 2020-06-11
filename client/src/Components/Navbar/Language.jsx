import React from 'react'
import styled from 'styled-components'
import { textColor } from '../../variables'

const LanguageSC = styled.div`
  display: flex;
  margin-right: 60px;
  color: ${(props) => props.textColor};
`

const Btn = styled.div`
  cursor: pointer;
`

const Language = () => {
  const changeLanguage = (lang) => {
    alert('Переключение языка временно недоступно')
  }
  return (
    <LanguageSC textColor={textColor}>
      <Btn onClick={() => changeLanguage('RU')}>RU</Btn>/
      <Btn onClick={() => changeLanguage('EN')}>EN</Btn>
    </LanguageSC>
  )
}

export default Language
