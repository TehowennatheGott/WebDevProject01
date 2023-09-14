import React, { useContext, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import { socketContext } from './data/socketContext';


function MultiplayerChoice() {

    const socket = useContext(socketContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(socket) {
            socket.emit("reach10", {count: 20});    
        } else {
            navigate('/multiplayer');
            console.log('No socket found');
        }
    }, [])

    return (
        <div>
            <button>Host</button>
            <button>Join</button>
        </div>
    )
}

export default MultiplayerChoice