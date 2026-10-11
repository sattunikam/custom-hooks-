import {useState} from "react"

function useCalculation(){
  const [counter, setCounter] = useState(0)
  
  const handleIncrement = ()=>{
    setCounter(counter + 1)
  }

   const handleDecrement = ()=>{
    setCounter(counter - 1)
  }

  return {counter, handleDecrement, handleIncrement}
}

export default useCalculation