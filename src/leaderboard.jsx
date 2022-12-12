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
    <div>
      <div>
        <div className="container-fluid">
          <div className="row m-0 p-0">
            <div className="col-8 p-0">
              <h1 className="mt-5 pt-5 pb-3 pe-5 text-end">Top Scores</h1>
            </div>
            <div className="col text-end pt-5 mt-3 pe-3">
              <SquareButton destination="/Category" text="Replay"/>
            </div>
          </div>
        </div>
        <br/><br/>
        <div className="container-fluid w-75 text-center">
          <Row name="Name" category="Category" score="Score" style="fw-bold"/>
          {scores.map((scoreData, index) => {
                    return <Row key={index} name={scoreData.name} category={scoreData.categoryName} score={scoreData.score}/>
                })}
        </div>
      </div>
    </div>
  )
}

export default Leaderboard