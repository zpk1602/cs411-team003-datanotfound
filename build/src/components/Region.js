import React, { useState } from 'react';
import '../components/PaginationTable.css';

const Region = ({ data, rowsPerPage }) => {
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
    <div className="display" id="region">
      <div className="display_table">
        <table id="highest_match_played">
          <thead>
            <tr>
                <th></th>
                <th>Tag</th>
                <th>Real Name</th>
                <th>Country</th>
                <th>Team Region</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row, index) => (
              <tr key={index}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.real}</td>
                <td>{row.country}</td>
                <td>{row.team_region}</td>
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

export default Region;