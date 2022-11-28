import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import Catagory from './Catagory';
import Quiz from './Quiz';
import Result from './Result';
import Leaderboard from './Leaderboard';
import NotFound from './NotFound';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route index element={<Home/>}/>
    <Route path="/catagory" element={<Catagory/>}/>
    <Route path="/quiz" element={<Quiz/>}/>
    <Route path="/result" element={<Result/>}/>
    <Route path="/leaderboard" element={<Leaderboard/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();