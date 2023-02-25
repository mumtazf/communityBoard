import { useState } from 'react'
import './App.css'
import Board from "./components/Board"

const App = () => {

  return(
    <div className = "App">
      <h1>Self-care for College Students</h1>
      <p>College can be a stressful at times. <br/> Find out ways to destress and find your moment of calm.</p>
      <Board />
      <p>Made with 💝 by Mumtaz</p>
    </div>
  )
}

export default App;
