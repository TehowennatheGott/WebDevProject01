import REact, { useEffect, useRef } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';
import { socketContext } from './data/socketContext';

const SERVERHOST = 'http://localhost:5000'

function Multiplayer() {

    const socket = useRef()
    const navigate = useNavigate();

    useEffect(() => {
        // On load
        socket.current = io(SERVERHOST);
        console.log('Connected to WS server');
        navigate('choice');
    }, []);

    return (
        <socketContext.Provider value={socket.current}>
            <Outlet/>
        </socketContext.Provider>
    )
}

export default Multiplayer