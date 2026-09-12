import { useState } from "react";

const App = () => {
  console.log("render", Math.random())
  const [value, setValue] = useState(1)
  // yaha main ek state kam use kiya hai ese wo bas ek bar mount ho raha hai
  // kyuki ek bar mount ho matlab pura code line by line fir se execute ho rahi hai
  // esiliye multipleValue khud se hi update ho ja rahi hai hame yaha dubara state use karne ki koi need nhi thi
  // const [multipleValue, setMultipleValue] = useState(1)

  // let multipleValue = value*5
  // const multipleByTwo = () => {
  //   setValue(value+1)
  // }

  // kab kab app render ho raha hai
  const btnclick = () => {
    setValue(2)
  }
  return (
    <div>
      <p>Initial Value: {value}</p>
      {/* <button onClick={multipleByTwo}>clickToMultipleByTwo</button> */}
      <button onClick={btnclick}>click</button>
      {/* <p>Multiply Value: {multipleValue}</p> */}
    </div>
  )
}

export default App;
