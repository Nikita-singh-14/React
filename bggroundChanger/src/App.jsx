import { useState } from "react"
import './index.css'
function App() {
  const [color, setColor] = useState('white')

  return (
    <>
    <div className="w-full h-screen" 
    style={{backgroundColor: color}}>
      <div className="flex justify-center ">
        <div className="bg-white p-2 flex gap-2 mt-9 rounded-xl">
          <button className="outline-none px-2 rounded-xl" style={{backgroundColor:'red'}}
          onClick={()=>setColor('red')}
          >red</button>
          <button className="outline-none px-2 rounded-xl" style={{backgroundColor:'blue'}}
          onClick={()=>setColor('blue')}
          >blue</button>
          <button className="outline-none px-2 rounded-xl" style={{backgroundColor:'green'}}
          onClick={()=>setColor('green')}
          >green</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
