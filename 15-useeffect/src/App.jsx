import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
 
  // // EX-1
  // const [num, setNum] = useState(0)
  // const [num2, setNum2] = useState(0)

  // useEffect(function() {
  //   console.log('use effect is running...');
  // }, [num2])

  // return (
  //   <div>
  //     <h1>num1 {num}</h1>
  //     <h1>num2 {num2}</h1>
  //     <button onClick={()=> {
  //       setNum(num+1)
  //     }}
  //     onDoubleClick={()=> {
  //       setNum2(num2+10)
  //     }}>Click</button>
  //   </div>
  // )


  // Ex-2
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aChanging(){
    console.log('A ki value change ho gyi');
  }
  function bChanging(){
    console.log('B ki value change ho gyi');
  }
  useEffect(function(){
    aChanging()
  }, [a])

  return(
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={()=> {
        setA(a+1)
      }}>ChangeA</button>
      <button onClick={()=> {
        setB(b-1)
      }}>ChangeB</button>
    </div>
  )
}

export default App
