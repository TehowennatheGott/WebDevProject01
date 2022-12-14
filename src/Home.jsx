import React from 'react'
import SquareButton from './SquareButton'

function home() {
  return (
    <div>
      <div className="flex container rounded text-center pt-3 mt-5" style={{backgroundColor: 'rgb(255, 235, 205)'}}>
        <div className="row align-bottom mt-5">
          <div className="col">
            <h1>Welcome to Quiztacular</h1>
          </div>
        </div>
        <div className="row">
          <div className="col py-4 fw-semibold">
            <span>Made by: Zacharyah Whitcher and Andrew Sherrer</span>
          </div>
        </div>
        <div className="row">
          <div className="col py-4 text-end">
            <SquareButton text='Play' destination='/Category'></SquareButton>
          </div>
          <div className="col py-4 text-start">
            <SquareButton 
            text='Leaderboard' destination='/Leaderboard'></SquareButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default home