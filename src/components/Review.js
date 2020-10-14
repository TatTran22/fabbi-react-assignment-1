import React, { useState, useEffect } from 'react';
import './Review.css';

const Review = ({ meal, people, restaurant, dishes, servings }) => {
  const Dish = ({ d, s }) => {
    return (
      <div className='review-dishes'>
        <div className='dish'>{d}</div>
        <div className='serving'>{s}</div>
      </div>
    );
  };

  return (
    <div>
      <div className='review-label'>
        Meal: <div className='review-meal'>{meal}</div>
      </div>
      <div className='review-label'>
        People: <div className='review-people'>{people}</div>
      </div>
      <div className='review-label'>
        Restaurant: <div className='review-restaurant'>{restaurant}</div>
      </div>
      <div className='review-label'>
        Dishes:
        <div className='review-dish'>
          {dishes.map((e, i) => (
            <Dish key={e.id} d={e.name} s={servings[i]} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
