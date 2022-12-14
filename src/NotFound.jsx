import React from 'react';
import Background from './images/404meme.png';

function NotFound() {
  return (
    <>
        <h1 className='flex container rounded text-center mt-2' style={{backgroundColor: 'rgb(255, 235, 205)', maxWidth: '300px'}}>404 Not Found</h1>
        <div className="" style={{backgroundImage: "url(" + Background + ")", maxWidth: '210vh', height: '91vh', backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}></div>
    </>
  )
}

export default NotFound