import React from 'react'
import { Link } from 'react-router-dom'
import PillButton from './PillButton'

function Quiz() {
  return (
    <div>
      <div className='flex-container text-center'>
        <div className="row justify-content-end">
          <h5 className="col text-start ms-1 mt-2">Q. 1/10</h5>
          <div className="col text-end">
            <Link to='/Home' className='btn btn-sm text-bg-light rounded-0 border border-secondary px-3 me-1 mt-2'>Stop</Link>
          </div>
        </div>
        <div className="row">
          <h1>History Quiz</h1>
        </div>
        <div className="row">
          <h3>1. What is the capital of Hungary?</h3>
        </div>
        <div className="row my-5">
          <div className="col text-end mx-5">
            <PillButton text='Option 1' destination='/Result'></PillButton>
          </div>
          <div className="col text-start mx-5">
            <PillButton text='Option 2' destination='/Result'></PillButton>
          </div>
        </div>
        <div className="row my-5">
          <div className="col text-end mx-5">
            <PillButton text='Option 3' destination='/Result'></PillButton>
          </div>
          <div className="col text-start mx-5">
            <PillButton text='Option 4' destination='/Result'></PillButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quiz