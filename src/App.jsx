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
      <h1 className="app-title">My Top Animes</h1>
      <div className='anime-list'>
        {
          
          animelist.map((anime, key) => {
            return <AnimeCard name={anime.name} mal_link={anime.mal_link} crunchy_link={anime.crunchy_link} img_path={anime.image_path} key={key}/>
          })
        }
      </div>
    </div>
  )
}

export default App
