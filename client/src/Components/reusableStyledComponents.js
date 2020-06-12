import styled from 'styled-components'

export const Text = styled.div`
  color: ${(props) => props.textColor};
`

export const ContentAreaSC = styled.div`
  width: 440px;
`

export const ButtonsAreaSC = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 425px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
  @media (min-width: 425px) {
    margin-bottom: 45px;
  }
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
  @media (max-width: 425px) {
    flex-direction: column;
    width: 90%;
    margin: 0 5%;
  }
`
