import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import { HashRouter as Router } from 'react-router-dom'
import './fonts/Amalfi-Coast/Amalfi-Coast.ttf'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
  {/* <React.StrictMode> */}
    <App />
  {/* </React.StrictMode>, */}
  </Router>
)
