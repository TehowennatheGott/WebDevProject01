import React from 'react';
import Background from './images/404meme.png';

function NotFound() {
  return (
    <>
      <div className="text-left" style={{backgroundImage: "url(" + Background + ")", minwidth: "100vw", minHeight: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
        <h1 className="fw-bolder">404 Not Found</h1>
      </div>
    </>
  )
}

export default NotFound