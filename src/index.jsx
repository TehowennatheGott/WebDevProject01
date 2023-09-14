import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import Category from './Category';
import Leaderboard from './Leaderboard';
import NotFound from './NotFound';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Play from './Play';
import Multiplayer from './Multiplayer';
import MultiplayerChoice from './MultiplayerChoice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Category" element={<Category/>}/>
      <Route path="/Play" element={<Play/>}/>
      <Route path="/Leaderboard" element={<Leaderboard/>}/>

      <Route path='multiplayer' element={<Multiplayer/>}>
        <Route path='choice' element={<MultiplayerChoice/>}>
      </Route></Route>

      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();