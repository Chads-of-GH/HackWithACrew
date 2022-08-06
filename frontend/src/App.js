import { useState } from 'react';
import './index.css';
import ColorBox from './color_box' ;
import AreaSize from './number';





function App() {


  return (
    <div className="App">
      <AreaSize/>
      <ColorBox/>
      <button>Start</button>
    </div>
  );
}

export default App;
