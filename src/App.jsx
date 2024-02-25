import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Calendar from './components/Calender'
import './App.css'

function App() {

  return (
    <div className="App">
      <h1>Top anime's this season</h1>
      <Calendar/>
    </div>
  )
}

export default App
