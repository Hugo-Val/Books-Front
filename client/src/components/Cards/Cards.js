import React from 'react';
import Card from '../Card/Card';
import './Cards.css'

const Cards = ({ books }) => {
  return (
    <div className="cards-container">
      {books.map((book) => (
        <Card key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Cards;
