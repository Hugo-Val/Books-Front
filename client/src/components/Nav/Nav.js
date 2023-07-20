import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="https://img.freepik.com/vector-gratis/plantilla-logotipo-libreria-diseno-plano_23-2149325325.jpg?w=2000"
            alt="Logo de la tienda de libros"
            width="100"
            height="30"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categorias">
                Categorías
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ofertas">
                Ofertas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">
                Contacto
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/carrito">
                Carrito
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

