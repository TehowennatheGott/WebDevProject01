import React from 'react'
import SquareButton from './SquareButton'

function Home() {
  return (
    <div className='text-center'>
      <h1>Welcome to Quiztacular</h1>
      <span>Made by: Zacharyah Whitcher and Andrew Sherrer</span>
      <SquareButton text='Play' destination='/Category'></SquareButton>
    </div>
  )
}

export default Home