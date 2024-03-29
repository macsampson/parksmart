import React, { useEffect } from 'react'
// import './App.css'

import { register as registerServiceWorker } from './serviceWorker'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import ParkingPage from './components/ParkingPage'
// import 'typeface-roboto'
import './styles/App.css'
import dotenv from 'dotenv'

dotenv.config()

export default function App() {
  useEffect(() => {
    registerServiceWorker()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/parking' element={<ParkingPage />} />
      </Routes>
    </BrowserRouter>
  )
}
