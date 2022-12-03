import React from 'react'
import SquareButton from './SquareButton'

function home() {
  return (
    <div className='text-center'>
      <h1>Welcome to Quiztacular</h1>
      <span>Made by: Zacharyah Whitcher and Andrew Sherrer</span>
      <SquareButton text='Play' destination='/Catagory'></SquareButton>
    </div>
  )
}

export default home