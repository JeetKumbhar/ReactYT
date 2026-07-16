import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Herotext from './Herotext'
import Arrow from './Arrow'

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col w-1/4 '>
      <Herotext />
      <Arrow />
    </div>
  )
}

export default LeftContent
