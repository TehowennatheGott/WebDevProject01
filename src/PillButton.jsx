import React from "react";
import { Link } from 'react-router-dom';

function PillButton(props) {
    return (
        <div>
            <Link to={props.destination} className='btn btn-lg text-bg-light w-25 py-4 rounded-pill border border-secondary'>{props.text}</Link>
        </div>
      )
}

export default PillButton