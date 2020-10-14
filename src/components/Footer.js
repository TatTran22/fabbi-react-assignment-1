import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import './Footer.css';

const Footer = ({ step, page, meal, restaurant, dishes, valid }) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const handleClick = (e) => {
    page(e);
    setIsInvalid(false);
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
      <Button className='next' onClick={() => handleClick(step + 1)} type='primary' disabled={isInvalid}>
        {step < 4 ? 'Next' : 'Submit'}
      </Button>
    </div>
  );
};
export default Footer;
