import React from 'react'
import { ContentAreaSC } from '../../reusableStyledComponents'
import ImageArea from './ImageArea'
import ButtonsArea from './ButtonsArea'

const ContentArea = () => {
  return (
    <ContentAreaSC>
      <ImageArea />
      <ButtonsArea />
    </ContentAreaSC>
  )
}

export default ContentArea
