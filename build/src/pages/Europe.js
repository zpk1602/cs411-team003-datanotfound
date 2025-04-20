import React, { useState, useEffect } from 'react';
import PaginatedTable from '../components/Region';
import { fetchPlayers } from '../data/regions'

const Europe = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchPlayers();
      const filteredData = fetchedData.filter(player => player.team_region === 'Europe');
      setData(filteredData);
    };
    getData();
  }, []);

  return (
    <div>
      <PaginatedTable data={data} rowsPerPage={100} />
    </div>
  );
};

export default Europe;