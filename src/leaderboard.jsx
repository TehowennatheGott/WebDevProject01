import React from 'react';
import Row from './Row.jsx';

function leaderboard() {
  return (
    <div>
      <div className="text-center">
        <h1 className="mt-5 pt-5 pb-3">Top Scores</h1>
        {/* Replace this comment with button component after merge. */}
        <br/><br/>
        <div className="container-fluid w-75">
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

export default leaderboard