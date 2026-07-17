import React, { useState } from 'react'

const App = () => {

  // const [num, setnum] = useState({user:"Sarthak", age:25})

  // const btnClicked = ()=> {
  //   // const newNum = {...num};
  //   // newNum.user = "Shradha"
  //   // newNum.age = 23
  //   // setnum(newNum)

  //   setnum(prev=>({...prev, user:"Shradha", age:23}))
  // }

  // const [num, setnum] = useState([10, 20, 30])

  // const btnClicked = ()=> {
  //   const newNum = [...num]
  //   newNum.push(99)
  //   setnum(newNum)
  // }

  const [num, setnum] = useState(10)

  const btnClicked = ()=> {
    // setnum(num+1)
    // setnum(num+1)
    // setnum(num+1)

    setnum(prev => (prev+1))
    setnum(prev => (prev+1))
    setnum(prev => (prev+1))
  }

  return (
    <div>
      {/* <h1>{num.user}, {num.age}</h1> */}
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App
