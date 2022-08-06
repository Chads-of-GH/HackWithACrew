import { useState } from 'react';
import './index.css';
import ColorBox from './color_box' ;
import AreaSize from './area';
import PhoneNumber from './phone_number';
import { BrowserRouter, Switch, Route, NavLink, Routes } from "react-router-dom";
import Search from './search';


function App() {


  return (
    // <BrowserRouter>
    <div className="App">
      <AreaSize/>
      <ColorBox/>
      <PhoneNumber/>



    </div>

  );
}

export default App;
