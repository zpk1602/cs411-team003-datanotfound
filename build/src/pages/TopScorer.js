import React, { useState, useEffect } from 'react';
import PaginatedTable from '../components/TopScorer';
import { fetchTopScorer } from '../data/top_scorer'

const TopScorer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchTopScorer();
      setData(fetchedData);
    };
    getData();
  }, []);

  return (
    <div>
      <PaginatedTable data={data} rowsPerPage={100} />
    </div>
  );
};

export default TopScorer;