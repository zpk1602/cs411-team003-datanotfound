import React, { useState, useEffect } from 'react';

import { fetchPlayers } from '../data/players'
import './PaginationTable.css'
import './SearchBar.css'
import PaginatedTable from './Search';

const PlayerSearch = () => {
  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPlayers, setFilteredPlayers] = useState([]);

  useEffect(() => {
    const getPlayers = async () => {
      const players = await fetchPlayers();
      setPlayers(players);
      setFilteredPlayers(players);
    };
    getPlayers();
  }, []);

  useEffect(() => {
    const filtered = players.filter(player =>
      player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.real.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.slug.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPlayers(filtered);
  }, [searchTerm, players]);

  return (
    <div className='display_table'>
      <input
        type="text"
        placeholder="Search players..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <PaginatedTable data={filteredPlayers} rowsPerPage={100} />
    </div>
  );
};

export default PlayerSearch;