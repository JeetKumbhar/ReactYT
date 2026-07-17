import React, { useState } from 'react'
import {X} from 'lucide-react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()

    const copyTask = [...task];
    copyTask.push({title, details})
    setTask(copyTask)

    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx)=> {
    const copyTask = [...task];
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white  '>
      <form onSubmit={submitHandler} className='flex items-start flex-col gap-4 lg:w-1/2 p-10'>
        <h1 className='text-3xl font-bold'>Add Notes</h1>
          <input 
          type="text" 
          placeholder='Enter Notes Heading' 
          className='px-5 w-full py-2 border-2 rounded outline-none font-medium'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          />
          <textarea
          type="text" 
          placeholder='Write Details here'
          className='flex items-start flex-row h-32 w-full px-5 py-2 border-2 rounded outline-none font-medium'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
          />
          <button className='bg-white text-black  active:scale-95 w-full px-5 py-2 rounded outline-none font-medium'>Add Note</button>
      </form>
      <div className='lg:w-1/2 p-10 lg:border-l-2'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>
          {task.map(function(elem, idx){

            return <div key={idx} className='relative h-52 w-40 rounded-2xl text-black py-8 px-4 bg-cover bg-[url(https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png)]'>
              <button 
              onClick={() => {
                deleteNote(idx)
              }}
              className='absolute top-4 right-4 bg-red-600 p-1 rounded-full cursor-pointer active:scale-95'><X size={16} strokeWidth={2.75}/></button>
              <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
              <p className='mt-2 leading-tight font-medium text-gray-700'>{elem.details}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
