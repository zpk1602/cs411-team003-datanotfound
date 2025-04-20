import React, { useState, useEffect } from 'react';
import PaginatedTable from '../components/TopStriker';
import { fetchTopStrikers } from '../data/top_strikers'

const TopStriker = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchTopStrikers();
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

export default TopStriker;