import React from 'react'
import { useState } from 'react'

const App = () => {

  const [name, setname] = useState('')

  const submitHandler = (e)=> {
    e.preventDefault()
    console.log("for submited by", name)
    setname('')
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input type="text" placeholder='enter your name'
        value={name}
        onChange={(e) => {
           setname(e.target.value);
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
