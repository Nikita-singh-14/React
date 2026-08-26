import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState('')
  const [number, setNumber] = useState(false)
  const [char, setChar] = useState(false)
  const passRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(number){
      str += '0123456789'
    }
    if(char){
      str += '`~!@#$%^&*(){}<?/*'
    }
    for(let i=0; i<length; i++){
      let position = Math.floor(Math.random() * str.length  + 1)
      pass += str.charAt(position)
    }
    setPassword(pass)
    
  }, [setPassword, length, number, char])

  const copyPassword = useCallback(() => {
    passRef.current.select()
    navigator.clipboard.writeText(passRef.current.value)
  }, [length, number, char, setPassword])

  useEffect(generatePassword, [length, number, char, setPassword])
  console.log(password)


  return (
    <>
      <div className='flex items-center justify-center'>
        <div className='flex flex-col justify-center items-center bg-white mt-6 py-6 px-16 gap-4 rounded-2xl'>
          <h2 className='text-black'>Password Generator</h2>
          <div>
            <input 
            type="text"
            ref={passRef}
            className='outline-blue-400 px-2 py-1 border-2 border-blue-400'
            placeholder='password'
            value={password}
            readOnly
            />
            <button className='bg-blue-400 px-2 py-1 border-2 border-blue-400 cursor-pointer'
            onClick={copyPassword}
            >Copy</button>
          </div>
          <div className='flex gap-4'>
            <input type="range" 
            value={length}
            min = '8'
            onChange={(e) => setLength(Number(e.target.value))}/>
          <div className='flex items-center gap-1'>
            <input type="checkbox"
            checked={number} 
            onChange={() => setNumber(prev => !prev)}/>
            <label htmlFor="">Number</label>
          </div>
          <div className='flex items-center gap-1'>
            <input type="checkbox"
            checked={char}
            onChange={() => setChar(prev => !prev)} />
            <label htmlFor="">Character</label>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
