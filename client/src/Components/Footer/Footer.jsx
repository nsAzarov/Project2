import React, { useContext } from 'react'
import { Text } from '../reusableStyledComponents'
import styled from 'styled-components'
import { StyleContext } from '../../contexts/StyleContext'

const FooterSC = styled.div`
  background-color: ${(props) => props.mainColor};
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
`

const Footer = () => {
  const { colors, language } = useContext(StyleContext)
  return (
    <FooterSC mainColor={colors.mainColor}>
      <Text textColor={colors.textColor}>
        {language === 'RU'
          ? '© 2020 WhoIsThat. Все права защищены'
          : '© 2020 WhoIsThat. All rights reserved.'}
      </Text>
      <Text textColor={colors.textColor}>
        {language === 'RU' ? 'Техподдержка: @почта' : 'Support: @email'}
      </Text>
    </FooterSC>
  )
}

export default Footer
