import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const MainSC = styled.div`
  min-height: ${(props) => props.minHeight}px;
`

const Main = () => {
  const [minHeight, setMinHeight] = useState(800)
  useEffect(() => {
    const navbarHeight = 58
    const footerHeight = 60
    setMinHeight(
      document.documentElement.clientHeight - navbarHeight - footerHeight
    )
  }, [])
  return <MainSC minHeight={minHeight}></MainSC>
}

export default Main
