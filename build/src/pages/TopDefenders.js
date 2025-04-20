import React, { useState, useEffect } from 'react';
import PaginatedTable from '../components/TopDefenders';
import { fetchTopDefenders } from '../data/top_defenders'

const TopDefenders = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchTopDefenders();
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

export default TopDefenders;