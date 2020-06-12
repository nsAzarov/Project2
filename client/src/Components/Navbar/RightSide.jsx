import React from 'react'
import styled from 'styled-components'

const RightSideSC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 60px;
  @media (max-width: 425px) {
    margin-right: 10px;
  }
`

const RightSide = ({ children }) => {
  return <RightSideSC>{children}</RightSideSC>
}

export default RightSide
