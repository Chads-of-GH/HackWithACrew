import { useState } from 'react';
import './index.css';
import ReactDOM from "react-dom";
import styled from "styled-components";


const Box = styled.div`
// background-color: ${({ currentColor }) => currentColor};
  background-color: hsl(145, 50%, 50%);
  margin: 0 auto 16px;
  height: 50px;
  width: 50px;
`;

const RangeInput = ({ label, value, max = 100, onChange }) => {
  return (
    <div>
      <label>{label}</label>{' '}
      <input
        type="range"
        value={value}
        min={0}
        max={max}
        onChange={e => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

const ColorBox = () =>{
    const [hue, setHue] = useState(210);
    const [saturation, setSaturation] = useState(50);
    const [lightness, setLightness] = useState(50);

    const currentColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;



    return(
        <div className='color_box'>
        {/* <ColorBox currentColor={currentColor} /> */}
        {/* <ColorBox/> */}
        <h2>{currentColor}</h2>
        <RangeInput label="Hue" value={hue} onChange={setHue} max={360} />
        <RangeInput label="Saturation" value={saturation} onChange={setSaturation}/>
        <RangeInput label="Brightness" value={lightness} onChange={setLightness}/>

        </div>
    )

}

export default ColorBox