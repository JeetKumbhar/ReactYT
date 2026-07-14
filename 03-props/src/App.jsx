import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Sarthak Sharma' age={25} img="https://images.unsplash.com/photo-1778452419724-1f605dc17c46?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user='Shradha Khapra' age={23} img="https://images.unsplash.com/photo-1780835725722-37f850f4bd0b?q=80&w=893&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user='Jeet Kumbhar' age={22} img="https://images.unsplash.com/photo-1657886708649-eda40992a10f?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
  )
}

export default App
