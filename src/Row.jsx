import React from 'react'

function Row(props) {
  return (
    <>
        <div className= {props.style}>
            <div className="row bg-light" style={{height: "30px"}}>
                <div className="col border">{props.name}</div>
                <div className="col border">{props.catagory}</div>
                <div className="col border">{props.score}</div>
            </div>
        </div>
    </>
  )
}

export default Row