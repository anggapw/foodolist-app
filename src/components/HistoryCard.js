/* eslint-disable react/prop-types */
import React from 'react';
import './HistoryCard.css';

const HistoryCard = ({ komponen }) => {
  return (
    <>
      {komponen.map((element) => (
        <div className="container">
          <img src={element.image} alt="food"></img>
          <h1>{element.restaurantName}</h1>
          <p>{element.location}</p>
          <p>{element.status}</p>
          <p>{element.date}</p>
        </div>
      ))}
    </>
  );
};

export default HistoryCard;
