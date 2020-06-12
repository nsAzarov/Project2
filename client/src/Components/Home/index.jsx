import React from 'react'
import styled from 'styled-components'
import ContentArea from './Content/ContentArea'
import { FileContextProvider } from '../../contexts/FileContext'

const MainSC = styled.div`
  min-height: calc(100vh - 118px);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Main = () => {
  return (
    <MainSC>
      <FileContextProvider>
        <ContentArea />
      </FileContextProvider>
    </MainSC>
  )
}

export default Main
