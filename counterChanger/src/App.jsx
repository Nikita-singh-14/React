import { useState } from 'react'
function App() {
let [counter, setCounter] = useState(10)
const increaseValue = () => {
  if(counter < 20){
    setCounter(counter + 1);

    // this increse by 1 because react does not change every time it changes in batch and there is one batch
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    //this increase counter by 4 beacuse here i want forcefully to increse by 4
    // setCounter(preCounter => preCounter + 1);
    // setCounter(preCounter => preCounter + 1);
    // setCounter(preCounter => preCounter + 1);
    // setCounter(preCounter => preCounter + 1);
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
