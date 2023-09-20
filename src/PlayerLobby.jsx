import React, { useContext, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import { socketContext } from './data/socketContext';
import SquareButton from './SquareButton';


function PlayerLobby() {

  const socket = useContext(socketContext);
  const navigate = useNavigate();

  useEffect(() => {
      if(socket) {
          socket.emit("reach10", {count: 20});   
          console.log(socket)
      } else {
          navigate('/multiplayer');
          console.log('No socket found');
      }
  }, [])


  return (
      <div>
      <div className="flex container rounded text-center pt-3 mt-5" style={{backgroundColor: 'rgb(255, 235, 205)'}}>
        <div className="row align-bottom mt-5">
          <h1>aaaaaaa</h1>
          </div>
        <div className="row">
          <div className="col py-4 text-end">
            <SquareButton text='Join' destination ='/home'></SquareButton>
          </div>
          <div className="col py-4 text-start">
            <SquareButton text='Host'></SquareButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerLobby