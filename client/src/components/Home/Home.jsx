import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import Pagination from '../Paginate/Paginate';
// import libros from '../../libros.json'
// import axios from 'axios';
import './Home.css'
import { obtener_Todos_Libros } from '../../redux/actions/actions';
import NavBar from '../Nav/Nav';
import Cardsw from '../Cards/Cardsw';



const Home = () => {
  // State para almacenar los libros
  const dispatch = useDispatch()
  const todoLibros = useSelector((state) => state.libros)
  const [books, setBooks] = useState([]);

  // State para manejar la paginación
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 10;
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(obtener_Todos_Libros())
    
  }, []);
  useEffect(() => {
    setBooks(todoLibros)

  }, [todoLibros]);



  return (
    <div className="home-page">
      <NavBar /> {/* Componente de la barra de navegación */}
      <div className="container mt-5">
        <h1>Lista de Libros</h1>
        <Cardsw books={currentBooks} />
        {/* Componente para la paginación */}
        <Pagination
        currentPage={currentPage}
        totalBooks={books.length}
        booksPerPage={booksPerPage}
        onPageChange={handlePageChange}
      />
      </div>
    </div>
  );
};

export default Home;

