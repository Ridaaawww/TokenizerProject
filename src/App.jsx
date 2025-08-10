import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tokenizer from './Tokenizer'
import TokenGame from './pages/TokenGame'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from './pages/Home'
import StarBackground from './components/StarBackground'
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <StarBackground />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tokenizer" element={<Tokenizer />} />
          <Route path="/game" element={<TokenGame />} />
        </Routes>
      </div>
      <Analytics/>
    </>
  )
}

export default App
