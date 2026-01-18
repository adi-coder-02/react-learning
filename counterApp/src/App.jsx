import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Counter from './components/Counter'
import BgChanger from './components/BgChanger'


function App() {
  

  return (
    <>
      <BgChanger/>
      <Counter />
      <br />
      <Card username = "aditya singhal" btnText = "Read More" /> 
      <br />
      <br />

      

    </>
  )
}

export default App
