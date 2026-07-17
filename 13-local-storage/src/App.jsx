import React from 'react'

const App = () => {

  // localStorage.setItem('user','Jeet')

  // localStorage.getItem('user')
  // console.log(user);

  // localStorage.removeItem('user')

  // localStorage.clear()

  const user = {
    unername: 'Jeet',
    age: 22,
    city: "Mumbai"
  }
  localStorage.setItem('user',JSON.stringify(user))

  const user = JSON.parse(localStorage.getItem('user'))
  console.log(user)

  return (
    <div>
      
    </div>
  )
}

export default App
