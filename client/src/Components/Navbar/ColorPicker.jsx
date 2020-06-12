import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { StyleContext } from '../../contexts/StyleContext'

const ColorPickerSC = styled.div`
  height: 30px;
  width: 30px;
  border: 3px solid whitesmoke;
  background-color: ${(props) => props.mainColor};
  position: relative;
`

const Plate = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  height: 100px;
  width: 185px;
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  background-color: whitesmoke;
`

const BtnColor = styled.div`
  cursor: pointer;
  height: 30px;
  width: 30px;
  border: 3px solid #e3e3e3;
  margin: 5px;
  background-color: ${(props) => props.mainColor};
`

const ColorPicker = () => {
  const { colors, setColors } = useContext(StyleContext)
  const [plateOpened, setPlateOpened] = useState(false)
  const colorsArray = [
    '#3667b5',
    '#36a8b5',
    '#36b574',
    '#d2c33f',
    '#f4853e',
    '#f53d3d',
    '#e460db',
    '#bf60e6',
  ]
  return (
    <BtnColor
      mainColor={colors.mainColor}
      style={{ position: 'relative' }}
      onClick={() => setPlateOpened(!plateOpened)}
    >
      {plateOpened ? (
        <Plate>
          {colorsArray.map((color) => (
            <BtnColor
              mainColor={color}
              onClick={() => setColors({ ...colors, mainColor: color })}
            />
          ))}
        </Plate>
      ) : null}
    </BtnColor>
  )
}

export default ColorPicker
