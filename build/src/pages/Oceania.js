import React, { useState, useEffect } from 'react';
import PaginatedTable from '../components/Region';
import { fetchPlayers } from '../data/regions'

const Oceania = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchPlayers();
      const filteredData = fetchedData.filter(player => player.team_region === 'Oceania');
      setData(filteredData);
    };
    getData();
  }, []);

  return (
    <div>
      <h2 className="table_title">Oceania</h2>
      <PaginatedTable data={data} rowsPerPage={25} />
    </div>
  );
};

export default Oceania;