import React from 'react';
import Row from './Row.jsx';
import SquareButton from './SquareButton.jsx';

function Leaderboard() {
  return (
    <div>
      <div className="">
        <div className="container-fluid">
          <div className="row m-0 p-0">
            <div className="col-8 p-0">
              <h1 className="mt-5 pt-5 pb-3 pe-5 text-end">Top Scores</h1>
            </div>
            <div className="col text-end pt-5 mt-3 pe-3">
              <SquareButton style="" destination="/catagory" text="Replay" />
            </div>
          </div>
        </div>
        <br/><br/>
        <div className="container-fluid w-75 text-center">
          <Row name="Name" catagory="Catagory" score="Score" style="fw-bold"/>
          <Row name="" catagory="" score=""/>
          <Row name="" catagory="" score=""/>
          <Row name="" catagory="" score=""/>
          <Row name="" catagory="" score=""/>
          <Row name="" catagory="" score=""/>
          <Row name="" catagory="" score=""/>
          <Row name="" catagory="" score=""/>
          <Row name="" catagory="" score=""/>
          <Row name="" catagory="" score=""/>
          <Row name="" catagory="" score=""/>
        </div>
      </div>
    </div>
  )
}

export default Leaderboard