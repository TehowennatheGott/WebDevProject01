import React from 'react'
import SquareButton from './SquareButton'

function result() {
  return (
    <>
    <div className="text-center">
      <h1 className="mt-5 pt-5 pb-3">Completed!</h1>
      <h3 className="fs-3 mb-5 pb-5">Your score is <span>{/* This value will be changed with the sessionStorage results */}X</span>/10</h3>
      <div className="container">
        <div className="row">
          <div className="col">
            <label className="pe-2">Name: </label>
            <input type="text" id="name" name="name"/>
          </div>
          <div className="col-6">
            <SquareButton destination="/leaderboard" text="Save score to leaderboard" />
          </div>
        </div>
      </div>
      <SquareButton destination="/catagory" text="Replay" />
    </div>
    </>
  )
}

export default result