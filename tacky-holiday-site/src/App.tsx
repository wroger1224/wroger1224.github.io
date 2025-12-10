import { useState } from 'react'
import './App.css'
import Snowfall from 'react-snowfall'
import TackySnow from './components/TackySnow/tackySnow'



function App() {
  return (
    <div className="snowfall-container">
      <TackySnow />
      <div className="garland-top"></div>
      <img className="train" src="/animated-christmas-train-image-0020.gif" alt="Pixel art train with elves moving across the bottom of the screen" />
    </div>
  );
}

export default App
