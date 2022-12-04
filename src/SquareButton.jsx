import React from 'react'
import { Link } from 'react-router-dom'

function SquareButton(props) {
  return (
    <div>
        <Link to={props.destination} className='btn btn-lg text-bg-secondary px-5 rounded-2'>{props.text}</Link>
    </div>
  )
}

export default SquareButton