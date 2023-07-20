import React from 'react';
import './Paginate.css';

const Pagination = ({ currentPage, totalBooks, booksPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalBooks / booksPerPage);
  const pageNumbers = [];

  // Limitar la paginación a un máximo de 7 páginas
  const maxPagesToShow = 7;
  const middlePage = Math.floor(maxPagesToShow / 2);
  let startPage = currentPage - middlePage;
  let endPage = currentPage + middlePage;

  if (startPage <= 0) {
    startPage = 1;
    endPage = maxPagesToShow;
  }

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, totalPages - maxPagesToShow + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {/* Agregar botón "Anterior" */}
      {currentPage > 1 && (
        <li className="page-item">
          <button className="page-link" onClick={() => onPageChange(currentPage - 1)}>
            Anterior
          </button>
        </li>
      )}

      {pageNumbers.map((number) => (
        <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
          <button className="page-link" onClick={() => onPageChange(number)}>
            {number}
          </button>
        </li>
      ))}

      {/* Agregar botón "Siguiente" */}
      {currentPage < totalPages && (
        <li className="page-item">
          <button className="page-link" onClick={() => onPageChange(currentPage + 1)}>
            Siguiente
          </button>
        </li>
      )}
    </ul>
  );
};

export default Pagination;
