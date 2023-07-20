import React from 'react';
import './Cardw.css'
const Cardw = ({ book }) => {
  return (
    <div className="card">
    <img src={book.fotolibro} alt={book.nombrelibro} className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">{book.nombrelibro}</h5>
      <p className="card-text">Género: {book.nombregenero}</p>
      <p className="card-text">Precio: ${book.preciolibro}</p>
      <button className="btn btn-primary">Agregar a carrito</button>
    </div>
  </div>
  );
};

export default Cardw;
