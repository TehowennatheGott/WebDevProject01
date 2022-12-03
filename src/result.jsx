import React from 'react'

function result() {
  return (
    <>
    <div className="text-center">
      <h1 className="mt-5 pt-5 pb-3">Completed!</h1>
      <h3 className="fs-3 mb-5 pb-5">Your score is <span>{/* This value will be changed with the sessionStorage results */}X</span>/10</h3>
      <div>
        <label htmlFor="name" className=" pe-2">Name: </label>
        <input type="text" id="name" name="name"/>
        {/* Replace comment with Button component after merge is done */}
      </div>

      {/* Replace comment with Button component after merge is done */}
    </div>
    </>
  )
}

export default result