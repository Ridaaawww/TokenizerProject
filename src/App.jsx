import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tokenizer from './Tokenizer'
import TokenGame from './pages/TokenGame'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
        <Routes>
                  <Route path="/tokenizer"element={<Tokenizer />} />

        <Route path="/" element={<TokenGame />} />
      </Routes>
      </div>
    </>
  )
}

export default App
