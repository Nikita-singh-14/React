import { useState } from 'react'



function App() {
let [counter, setCounter] = useState(10)
const increaseValue = () => {
  if(counter < 20){
    setCounter(counter + 1);
  }
  
}
const decreaseValue = () => {
  if(counter > 0){
    setCounter(counter - 1);
  }
}
  return (
    <>
    <h1>Counter Changer: {counter}</h1>
    <button onClick={increaseValue}>Increment: {counter}</button>
    <br/>
    <button onClick={decreaseValue}>Decrement: {counter}</button>
    </>
  )
}

export default App
