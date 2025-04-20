import React, { useState } from 'react';

import logo from "./images/rlcs_logo.webp"

import './App.css';

import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Details from './pages/Details';
import TopScorer from './pages/TopScorer';
import TopWinners from './pages/TopWinners';
import TopStrikers from './pages/TopStrikers';
import TopDefenders from './pages/TopDefenders';
import NorthAmerica from './pages/NorthAmerica';
import Europe from './pages/Europe';
import Oceania from './pages/Oceania';
import SouthAmerica from './pages/SouthAmerica';
import APAC from './pages/APAC';
import './App.css';
import Search from './pages/Search';

function App() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
       <div className="grad">
            <img className="titleimage" src={logo} alt="RLCS Logo"></img>
            <div className="row">
                <button className="button_style" onClick={() => scrollToSection('home')}>Home</button>
                <button className="button_style" onClick={() => scrollToSection('season_format')}>Season Format</button>
                <button className="button_style" onClick={() => scrollToSection('season_schedule')}>Season Schedule</button>
                <button className="button_style" onClick={() => scrollToSection('matchPlayed')}>Matches Played</button>
            </div>
        </div>
       <div className="parallax"></div>
      <header className="header-bar" id="home">
        Rocket League Championship Series
      </header>
      <div className="content">
        <aside className="sidebar">
          <Sidebar />
        </aside>
        <div className="main-content">
          <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/details" element={<Details />} />
          <Route path="/top-winners" element={<TopWinners />} />
          <Route path="/top-scorer" element={<TopScorer />} />
          <Route path="/top-strikers" element={<TopStrikers />} />
          <Route path="/top-defenders" element={<TopDefenders />} />
          <Route path="/north-america" element={<NorthAmerica />} />
          <Route path="/europe" element={<Europe />} />
          <Route path="/oceania" element={<Oceania />} />
          <Route path="/south-america" element={<SouthAmerica />} />
          <Route path="/apac" element={<APAC />} />
          <Route path="/" element={<Details />} /> {/* Default route */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;