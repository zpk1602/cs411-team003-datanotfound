import React, { useState } from 'react';
import '../components/PaginationTable.css';

const Search = ({ data, rowsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
  
  return (
    <div className="display" id="search">
    <h2 className="table_title">Search Results</h2>
      <div className="display_table">
        <table id="highest_match_played">
          <thead>
          <tr>
            <th></th>
            <th>Tag</th>
            <th>Real Name</th>
            <th>Country</th>
          </tr>
          </thead>
          <tbody>
            {currentRows.map((player, index) => (
              <tr key={index}>
                <td>{player.id}</td>
                <td>{player.name}</td>
                <td>{player.real}</td>
                <td>{player.country}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <button onClick={handleFirstPage}>&laquo;&laquo;</button>
        <button onClick={handlePrevPage}>&laquo;</button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handleClick(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={handleNextPage}>&raquo;</button>
        <button onClick={handleLastPage}>&raquo;&raquo;</button>
    </div>
  </div>
  );
};

export default Search;