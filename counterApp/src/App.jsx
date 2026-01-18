import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Counter from './components/Counter'

function App() {
  

  return (
    <>
      <Counter />
      <br />
      <Card username = "aditya singhal" btnText = "Read More" /> 
    </>
  )
}

export default App
