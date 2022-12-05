import React from 'react'
import { Link } from 'react-router-dom'
import PillButton from './PillButton'


function Category() {
  return (
    <div>
      <Link to='/Home' className='btn btn-sm text-bg-light rounded-0 border border-secondary px-3 ms-1 mt-2'>Back</Link>
      <div className='flex-container text-center'>
        <div className="row">
          <h1>New Quiz</h1>
        </div>
        <div className="row">
          <h5>Please select a category</h5>
        </div>
        <div className="row my-5">
          <div className="col text-end mx-5">
            <PillButton text='Category 1' destination='/Quiz'></PillButton>
          </div>
          <div className="col text-start mx-5">
            <PillButton text='Category 2' destination='/Quiz'></PillButton>
          </div>
        </div>
        <div className="row my-5">
          <div className="col text-end mx-5">
            <PillButton text='Category 3' destination='/Quiz'></PillButton>
          </div>
          <div className="col text-start mx-5">
            <PillButton text='Category 4' destination='/Quiz'></PillButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category