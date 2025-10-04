import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Booking from './pages/Booking'
import ErrorBoundary from './components/helpers/ErrorBoundary.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'



export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route 
          path="/booking" 
          element={
            <ErrorBoundary>
              <Booking />
            </ErrorBoundary>
          } 
        />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

