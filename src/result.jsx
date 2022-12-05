import React from 'react'
import SquareButton from './SquareButton'

function Result() {
  return (
    <>
    <div>
      <div className="text-center">
      <h1 className="mt-5 pt-5 pb-3">Completed!</h1>
      <h3 className="fs-3 mb-5 pb-5">Your score is <span>{/* This value will be changed with the sessionStorage results */}X</span>/10</h3>

      </div>
      <div className="container-fluid mb-5">
        <div className="row m-0">
          <div className="col text-end align-middle">
            <label className="pe-2 pt-4">Name: </label>
            <input type="text" id="name" name="name"/>
          </div>
          <div className="col-6 px-5">
            <SquareButton destination="/leaderboard" text="Save score to leaderboard" />
          </div>
        </div>
      </div>
      <div className="text-center">
        <SquareButton destination="/catagory" text="Replay" />
      </div>
    </div>
    </>
  )
}

export default Result