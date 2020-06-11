import styled from 'styled-components'

export const Text = styled.div`
  color: ${(props) => props.textColor};
`

export const ContentAreaSC = styled.div`
  width: 440px;
`

export const ButtonsAreaSC = styled.div`
  width: 100%;
  margin-bottom: 45px;
  display: flex;
  justify-content: space-between;
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 200px;
  height: 80px;
  border: none;
  background-color: ${(props) => props.mainColor};
  color: ${(props) => props.textColor};
  font-size: 24px;
  line-height: 28px;
`
