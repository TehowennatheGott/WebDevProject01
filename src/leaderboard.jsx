import React, { useState, useEffect } from 'react';
import { authorizationToken, top10route } from './constants.js';
import Row from './Row.jsx';
import SquareButton from './SquareButton.jsx';

function Leaderboard() {

  const [scores, setscores] = useState([])

  useEffect(() => {
    // TODO
    // Called upon component mount
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

    console.log('response.status: ', response.status);

    const data = await response.json();
    console.log('data: ', data);

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
          <Row name={scores[0].name} category={scores[0].categoryName} score={scores[0].score}/>
          <Row name={scores[1].name} category={scores[1].categoryName} score={scores[1].score}/>
          <Row name={scores[2].name} category={scores[2].categoryName} score={scores[2].score}/>
          <Row name={scores[3].name} category={scores[3].categoryName} score={scores[3].score}/>
          <Row name={scores[4].name} category={scores[4].categoryName} score={scores[4].score}/>
          <Row name={scores[5].name} category={scores[5].categoryName} score={scores[5].score}/>
          <Row name={scores[6].name} category={scores[6].categoryName} score={scores[6].score}/>
          <Row name={scores[7].name} category={scores[7].categoryName} score={scores[7].score}/>
          <Row name={scores[8].name} category={scores[8].categoryName} score={scores[8].score}/>
          <Row name={scores[9].name} category={scores[9].categoryName} score={scores[9].score}/>
        </div>
      </div>
    </div>
  )
}

export default Leaderboard