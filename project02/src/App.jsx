import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str += "1234567890"
    if (charAllowed) str += "!@#$%^&*_-+=<>?/"

    for (let index = 0; index < length; index++) {

      let random = Math.floor( (Math.random() *str.length) + 1 )
      pass += str.charAt(random)  
    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])
  
  const copyToClipboard = () => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }

  useEffect(() => {
    passwordGenerator()
  },[length, charAllowed, numAllowed, passwordGenerator])
  
  const passwordRef = useRef(null)
  return (
    <div className='w-[100vw] flex justify-center mt-8  text-white '>
      <div className='border-2  bg-slate-700 p-8 rounded-2xl'>
        <h1 className='text-center  text-3xl mb-8'>Password generator</h1>
        <div className='border-2 h-10 w-4/5 m-auto flex rounded ' >
          <input type="text" ref={passwordRef} className='w-full pl-3 text-black' readOnly value={password} placeholder='password' />
          <button onClick={copyToClipboard} className='w-16 bg-blue-600 '>copy</button>
        </div>
        <div className='flex gap-4 justify-center mt-8'>
          <input type="range" min="6" max="46" value={length} onChange={(e)=> setLength(e.target.value)} />
          <p>length({length})</p>
          <input type="checkbox" id="Numbers" defaultChecked={numAllowed} onChange={()=> setNumAllowed(prev => !prev)} />
          <label htmlFor="Numbers">Numbers</label>
          <input type="checkbox" id="Character" defaultChecked={charAllowed} onChange={()=> setCharAllowed(prev => !prev)}  />
          <label htmlFor="Character">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
