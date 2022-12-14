import React from "react";
import { Link } from 'react-router-dom';

function PillButton(props) {
    return (
        <div>
            <Link to={props.destination} className='btn btn-lg text-bg-secondary text-center rounded-pill border border-secondary' style={{padding: '30px 0px 30px 0px', width: '200px'}}>{props.text}</Link>
        </div>
    )
}

export default PillButton