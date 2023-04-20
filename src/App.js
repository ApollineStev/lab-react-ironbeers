import axios from 'axios';
import './App.css';
import React from 'react'
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

import HomePage from './pages/HomePage';
import AllBeers from './pages/AllBeers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import BeerDetails from './pages/BeerDetails';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">

    <NavBar />

    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path="/Beers" element={<AllBeers />} />
      <Route path="/RandomBeer" element={<RandomBeer />} />
      <Route path="/NewBeer" element={<NewBeer />} />
      <Route path="/Beers/:id" element={<BeerDetails />} />
    </Routes>

    </div>
  );
}

export default App;
