import React, { useState, useEffect } from 'react';
import { authorizationToken, top10route } from './constants.js';
import Row from './Row.jsx';
import SquareButton from './SquareButton.jsx';

function Leaderboard() {

  const [scores, setscores] = useState([])

  useEffect(() => {
    fetchScores()
  }, [])

  async function fetchScores(){
    const options = {
      method: "GET",
      headers: {
        "Authorization": authorizationToken
      }
    }

    const response = await fetch(top10route, options)

    const data = await response.json();

    setscores(data);
  }
  return (
    <>
      <div className='flex container rounded text-center pt-3 mt-5' style={{backgroundColor: 'rgb(255, 235, 205)'}}>
        <div className="row">
          <div className="col-4"/>
          <div className="col-4">
            <h1 className="text-center">Top Scores</h1>
          </div>
          <div className="col-4 text-end">
            <SquareButton destination="/Category" text="Replay"/>
          </div>
        </div>
        <div className="row py-4 text-center">
          <div className="col"/>
          <div className="col-10 text-center">
            <Row name="Name" category="Category" score="Score" style="fw-bold text-bg-secondary"/>
            {scores.map((scoreData, index) => { 
            return <Row key={index} name={scoreData.name} category={scoreData.categoryName} score={scoreData.score} style="text-bg-light"/>
            })}
          </div>
          <div className="col"/>
        </div>
      </div>
    </>
  )
}

export default Leaderboard