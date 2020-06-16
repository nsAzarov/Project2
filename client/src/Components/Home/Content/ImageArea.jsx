import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import LogoImg from '../../Other/LogoImg'
import { StyleContext } from '../../../contexts/StyleContext'
import { FileContext } from '../../../contexts/FileContext'

const ImageAreaSC = styled.div`
  margin-top: 10px;
  margin-bottom: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 425px) {
    margin-bottom: 0px;
  }
`

const LogoWrapper = styled.div`
  @media (min-width: 768px) {
    height: 440px;
    width: 440px;
  }
  @media (min-width: 425px) {
    height: 420px;
    width: 420px;
  }
  @media (max-width: 425px) {
    height: 300px;
    width: 300px;
  }

  background-color: rgba(201, 195, 195, 0.78);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.div`
  @media (min-width: 425px) {
    width: 440px;
    img {
      max-width: 440px;
    }
  }
  @media (max-width: 425px) {
    width: 300px;
    img {
      max-width: 300px;
    }
  }
`

const ImageArea = () => {
  const { colors } = useContext(StyleContext)
  const { file, imagePreviewUrl } = useContext(FileContext)
  const [logoSize, setLogoSize] = useState({ height: 415, width: 320 })
  useEffect(() => {
    if (document.documentElement.clientWidth <= 425) {
      setLogoSize({ height: 290, width: 240 })
    } else {
      setLogoSize({ height: 415, width: 320 })
    }
    window.addEventListener('resize', () => {
      if (document.documentElement.clientWidth <= 425) {
        setLogoSize({ height: 290, width: 240 })
      } else {
        setLogoSize({ height: 415, width: 320 })
      }
    })
    return () => {
      window.removeEventListener('resize')
    }
  }, [])
  return (
    <ImageAreaSC>
      {imagePreviewUrl ? (
        <Image>
          <img src={imagePreviewUrl} alt='person' />
        </Image>
      ) : (
        <LogoWrapper>
          <LogoImg
            square={colors.secondaryColor}
            person={colors.mainColor}
            height={logoSize.height}
            width={logoSize.width}
          />
        </LogoWrapper>
      )}
    </ImageAreaSC>
  )
}

export default ImageArea
