import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container mx-auto bg-blue-500'>
      <NavBar/>
        {/* <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/players" element={<PlayersPage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes> */}
    </div>
      
    </>
  )
}

export default App
