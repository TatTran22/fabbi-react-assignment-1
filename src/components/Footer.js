import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import './Footer.css';

const Footer = ({ step, page, meal, restaurant, dishes, valid, people, servings }) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const handleClick = (e) => {
    page(e);
    setIsInvalid(false);
    if (step === 4) {
      const ds = [];
      // eslint-disable-next-line array-callback-return
      dishes.map((e, i) => {
        let d = {
          dish: '',
          serving: 0,
        };
        d.dish = e.name;
        d.serving = servings[i];
        ds.push(d);
      });
      console.log(`Meal: ${meal}\nPeople: ${people}\nRestaurant: ${restaurant}\nDishes: ${ds}`);
    }
  };

  useEffect(() => {
    if (step === 1) {
      if (!meal) setIsInvalid(true);
      else setIsInvalid(false);
    } else if (step === 2) {
      if (!meal || !restaurant) setIsInvalid(true);
      else setIsInvalid(false);
    } else if (step === 3) {
      if (valid) setIsInvalid(true);
      else setIsInvalid(false);
    } else if (step === 4) {
      if (valid) setIsInvalid(true);
      else setIsInvalid(false);
    }
  }, [meal, restaurant, valid, step]);

  return (
    <div className='footer'>
      {step > 1 ? (
        <Button className='previous' onClick={() => handleClick(step - 1)} type='primary'>
          Previous
        </Button>
      ) : (
        ''
      )}
      <Button
        className='next'
        onClick={() => handleClick(step < 4 ? step + 1 : step)}
        type='primary'
        disabled={isInvalid}
      >
        {step < 4 ? 'Next' : 'Submit'}
      </Button>
    </div>
  );
};
export default Footer;
