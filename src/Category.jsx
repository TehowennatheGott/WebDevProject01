import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import PillButton from './PillButton'

const backstring = '<= Back'
function Category() {

  let categoryInfo = [{name: null}, {id: null}]
  
  useEffect(() => {
    localStorage.setItem("categoryInfo", JSON.stringify(categoryInfo));
  })

  function categorySelection(categoryName, categoryId){

    categoryInfo[0].name = categoryName;
    categoryInfo[1].id = categoryId;

    localStorage.setItem("categoryInfo", JSON.stringify(categoryInfo))
  }
  
  return (
    <div>
      <Link to='/Home' className='btn btn-sm text-bg-light rounded-0 border border-secondary px-3 ms-1 mt-2'>{backstring}</Link>
      <div className='flex-container text-center'>
        <div className="row">
          <h1>New Quiz</h1>
        </div>
        <div className="row">
          <h5>Please select a category</h5>
        </div>
        <div className="row my-5">
          <div className="col text-end mx-5" onClick={() => categorySelection('Mythology', 20)}>
            <PillButton text='Mythology' destination='/Play'></PillButton>
          </div>
          <div className="col text-start mx-5" onClick={() => categorySelection('Geography', 22)}>
            <PillButton text='Geopgraphy' destination='/Play'></PillButton>
          </div>
        </div>
        <div className="row my-5">
          <div className="col text-end mx-5" onClick={() => categorySelection('Video Games', 15)}>
            <PillButton text='Video Games' destination='/Play'></PillButton>
          </div>
          <div className="col text-start mx-5" onClick={() => categorySelection('Film', 11)}>
            <PillButton text='Films' destination='/Play'></PillButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category