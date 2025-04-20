import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar-content">
      <div className="sidebar-heading">RLCS season start and end date</div>
      <Link to="/search" className="sidebar-button">Search</Link>
      <Link to="/details" className="sidebar-button">Details</Link>
      <Link to="/top-scorer" className="sidebar-button">Top Scorer</Link>
      <Link to="/top-strikers" className="sidebar-button">Top Strikers</Link>
      <Link to="/top-defenders" className="sidebar-button">Top Defenders</Link>
      <Link to="/north-america" className="sidebar-button">North America</Link>
      <Link to="/europe" className="sidebar-button">Europe</Link>
      <Link to="/oceania" className="sidebar-button">Oceania</Link>
      <Link to="/south-america" className="sidebar-button">South America</Link>
      <Link to="/apac" className="sidebar-button">APAC</Link>
    </div>
  );
};

export default Sidebar;
