import React from 'react'
import { Link } from 'react-router-dom'
import PillButton from './PillButton'

function quiz() {
  return (
    <div>
      <Link to='/Home' className='btn btn-sm text-bg-light rounded-0 border-dark border-5 ms-1 mt-2'>Back</Link>
      <div className='container text-center'>
        <div className="row">
          <h1>History Quiz</h1>
        </div>
        <div className="row">
          <h5>1. What is the capital of Hungary?</h5>
        </div>
        <div className="row my-5">
          <div className="col">
            <PillButton text='Category 1' destination='/Quiz'></PillButton>
          </div>
          <div className="col">
            <PillButton text='Category 2' destination='/Quiz'></PillButton>
          </div>
        </div>
        <div className="row my-5">
          <div className="col">
            <PillButton text='Category 3' destination='/Quiz'></PillButton>
          </div>
          <div className="col">
            <PillButton text='Category 4' destination='/Quiz'></PillButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default quiz