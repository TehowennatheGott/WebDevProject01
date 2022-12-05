import React from 'react'
import SquareButton from './SquareButton'

function home() {
  return (
    <div>
      <div className="flex container text-center pt-5 mt-5">
        <div className="row align-bottom mt-5">
          <div className="col">
            <h1>Welcome to Quiztacular</h1>
          </div>
        </div>
        <div className="row">
          <div className="col py-4">
            <span>Made by: Zacharyah Whitcher and Andrew Sherrer</span>
          </div>
        </div>
        <div className="row">
          <div className="col py-4">
            <SquareButton text='Play' destination='/Category'></SquareButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default home