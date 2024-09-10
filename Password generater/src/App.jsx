import { useState, useEffect, useCallback } from 'react'

import './index.css'

function App() {

  const [length, setLength] = useState(8);
  const [pass, setPass] = useState("")
  const [char, setChar] = useState(false)
  const [number, setNumber] = useState(false)

  const genPass = () => {
    let pass = ""
    let val = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) val += "0123456789"
    if (char) val += "!@#$%^&*-_+=[]{}~`"
    for (let i = 1; i <= length; i++) {

      let s = Math.floor(Math.random() * val.length + 1)

      pass += val.charAt(s)

      setPass(pass)
    }
  }

  function copy() {

    window.navigator.clipboard.writeText(pass)
  }

  useEffect(() => { genPass() }, [char, number, length])

  return (
    <>
      <div id='body'>
        <div id='com'>
          <input type="text" id='input' placeholder='password' value={pass} readOnly />
          <button id='cp' onClick={copy}>Copy</button>
          <input type="range" min={6} max={100} id='range' value={length} onChange={(e) => { setLength(e.target.value) }} />
          <label htmlFor="range">Length : {length}</label>
          <input type="checkbox" id="Numbers" onChange={() => { setNumber((prev) => !prev) }} />
          <label htmlFor="Numbers">Numbers</label>
          <input type="checkbox" id="Char" onChange={(e) => { setChar((prev) => !prev) }} />
          <label htmlFor="Char">Characters</label>
        </div>
      </div>
    </>
  )
}

export default App
