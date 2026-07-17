import React from 'react'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <form className='flex flex-col gap-4 p-10 justify-between'>
        <input 
        type="text" 
        placeholder='Enter Notes Heading' 
        className='px-5 py-2 border-2 rounded'
        />
        <input
        type="text" 
        placeholder='Write Details'
        className=' h-20 px-5 py-2 border-2 rounded'
        />
      </form>
    </div>
  )
}

export default App
