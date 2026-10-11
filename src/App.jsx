import React from 'react'
import useCalculation from "../src/useCalculation/useCalculation"

const App = () => {
    
  const {counter, handleIncrement, handleDecrement} = useCalculation()

  return (
    <>
    <h1>value is {counter}</h1>
    <button onClick={()=>{handleIncrement()}}>+</button>
     <button onClick={()=>{handleDecrement()}}>-</button>
    </>
  )
}

export default App