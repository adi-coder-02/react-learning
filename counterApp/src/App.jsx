import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let [count, setCount] = useState(0)

  const increaseCounter = () =>{
    if(count >= 20 ){
      return 
    }
    setCount(count + 1);
  }
  const decreaseCounter = () =>{
    if(count <= 0){
      return
    }
    setCount(count - 1);
  }

  return (
    <>
      <h1>Counter App</h1>
      <h3>Count : {count}</h3>
      <button
      onClick={increaseCounter}> + </button>
      <button
      onClick={decreaseCounter}> - </button>
      <br />
      <br />
      <Card username = "aditya singhal" btnText = "Read More" /> 
      <Card username = "yoyoyo"/> 
    </>
  )
}

export default App
