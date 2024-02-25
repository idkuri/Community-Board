import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import background from "./assets/background.png"
import AnimeCard from './components/AnimeCard'
import animelist from "./animelist.json"

function App() {

  return (
    <div className="App">
      <h1 className="app-title">My Top Animes This Season</h1>
      <div className='anime-list'>
        {
          
          animelist.map((anime, key) => {
            return <AnimeCard name={anime.name} key={key}/>
          })
        }
      </div>
    </div>
  )
}

export default App
