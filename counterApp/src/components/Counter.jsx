import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

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
    </>
  )
}

export default Counter
