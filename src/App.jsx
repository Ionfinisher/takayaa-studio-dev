import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar.jsx'
import HomePage from './Home/HomePage'

function App() {

  return (
    <>
    <div>
      <NavBar/>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          {/* <Route path="/players" element={<PlayersPage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/stats" element={<StatsPage />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    </div>
      
    </>
  )
}

export default App
