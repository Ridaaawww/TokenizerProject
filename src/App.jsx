import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tokenizer from './Tokenizer'
import ParticlesBackground from './components/ParticlesBackground'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
     <ParticlesBackground />
      <Tokenizer />
      </div>
    </>
  )
}

export default App
