import React, { useContext } from 'react'
import styled from 'styled-components'
import LogoImg from '../../Other/LogoImg'
import { StyleContext } from '../../../contexts/StyleContext'
import { FileContext } from '../../../contexts/FileContext'

const ImageAreaSC = styled.div`
  /* height: 440px; */
  /* width: auto; */
  margin-bottom: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LogoWrapper = styled.div`
  height: 440px;
  width: 440px;
  background-color: rgba(201, 195, 195, 0.78);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.div`
  width: 440px;
  img {
    max-width: 440px;
  }
`

const ImageArea = () => {
  const { colors } = useContext(StyleContext)
  const { file, imagePreviewUrl } = useContext(FileContext)
  return (
    <ImageAreaSC>
      {imagePreviewUrl ? (
        <Image>
          <img src={imagePreviewUrl} />
        </Image>
      ) : (
        <LogoWrapper>
          <LogoImg
            square={colors.textColor}
            person={colors.mainColor}
            height={415}
            width={320}
          />
        </LogoWrapper>
      )}
    </ImageAreaSC>
  )
}

export default ImageArea
