import React, { useContext } from 'react'
import styled from 'styled-components'
import { ButtonsAreaSC, Button } from '../../reusableStyledComponents'
import { StyleContext } from '../../../contexts/StyleContext'
import { FileContext } from '../../../contexts/FileContext'

const UploadFile = styled.div`
  width: 200px;
  height: 80px;
  border: none;
  background-color: ${(props) => props.mainColor};
  color: ${(props) => props.textColor};
  font-size: 24px;
  line-height: 28px;
  input[type='file'] {
    display: none;
    height: 100%;
    width: 100%;
  }
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  @media (max-width: 425px) {
    flex-direction: column;
    width: 90%;
    margin: 10px 5%;
  }
`

const ButtonsArea = () => {
  const { colors, language } = useContext(StyleContext)
  const { handleImageChange } = useContext(FileContext)
  return (
    <ButtonsAreaSC>
      <UploadFile mainColor={colors.mainColor} textColor={colors.textColor}>
        <label>
          <input type='file' onChange={(e) => handleImageChange(e)} />
          <span>{language === 'RU' ? 'Загрузить фото' : 'Upload photo'}</span>
        </label>
      </UploadFile>
      <Button mainColor={colors.mainColor} textColor={colors.textColor}>
        {language === 'RU' ? 'Определить личность' : 'Identify person'}
      </Button>
    </ButtonsAreaSC>
  )
}

export default ButtonsArea
