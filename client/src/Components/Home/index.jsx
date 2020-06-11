import React, { useContext } from 'react'
import styled from 'styled-components'
import ContentArea from './Content/ContentArea'
import { StyleContext } from '../../contexts/StyleContext'
import { FileContextProvider } from '../../contexts/FileContext'

const MainSC = styled.div`
  min-height: ${(props) => props.minHeight}px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Main = () => {
  const { minHeight } = useContext(StyleContext)
  return (
    <MainSC minHeight={minHeight}>
      <FileContextProvider>
        <ContentArea />
      </FileContextProvider>
    </MainSC>
  )
}

export default Main
