/* eslint-disable react/prop-types */
import React from 'react';

const Component = ({ komponen }) => {
  return (
    <>
      {komponen.map((element) => (
        <div className="container">
          <img src={element.image}></img>
          <h1>{element.restaurantName}</h1>
          <p>{element.location}</p>
          <p>{element.status}</p>
          <p>{element.date}</p>
        </div>
      ))}
    </>
  );
};

export default Component;
