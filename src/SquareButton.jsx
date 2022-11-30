import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function SquareButton(props) {
  return (
    <div>
        <Link to={props.destination} className='btn btn-lg text-bg-secondary px-5 w-25 rounded-2'>{props.text}</Link>
    </div>
  )
}

export default SquareButton