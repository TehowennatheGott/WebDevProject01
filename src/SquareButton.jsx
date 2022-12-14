import React from 'react'
import { Link } from 'react-router-dom'

function SquareButton(props) {
  return (
    <div>
        <Link to={props.destination} 
        onClick={props.clickEvent} className='btn btn-sm text-bg-secondary text-wrap rounded border border-secondary' style={{minWidth: '75px', minHeight: '25px', backgroundColor: 'rgb(233, 150, 122)'}}>{props.text}</Link>
    </div>
  )
}

export default SquareButton