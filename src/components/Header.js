import React, { useState } from 'react';
import { Button } from 'antd';
import './Header.css';

const Header = (props) => {
  const handleClick = (e) => {
    props.step(e);
  };
  return (
    <div className='header'>
      <Button onClick={() => handleClick(1)} type='primary'>
        Step 1
      </Button>
      <Button onClick={() => handleClick(2)} type='primary'>
        Step 2
      </Button>
      <Button onClick={() => handleClick(3)} type='primary'>
        Step 3
      </Button>
      <Button onClick={() => handleClick(4)} type='primary'>
        Review
      </Button>
    </div>
  );
};

export default Header;
