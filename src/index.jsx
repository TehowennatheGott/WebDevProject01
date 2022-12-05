import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './home';
import Catagory from './catagory';
import Quiz from './quiz';
import Result from './result';
import Leaderboard from './Leaderboard';
import NotFound from './notFound';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/catagory" element={<Catagory/>}/>
      <Route path="/quiz" element={<Quiz/>}/>
      <Route path="/result" element={<Result/>}/>
      <Route path="/Leaderboard" element={<Leaderboard/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();