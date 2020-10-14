import React from 'react';
import { Button } from 'antd';
import './Header.css';

const Header = ({ step }) => {
  return (
    <div className='header'>
      <Button type={step === 1 ? 'primary' : 'default'}>Step 1</Button>
      <Button type={step === 2 ? 'primary' : 'default'}>Step 2</Button>
      <Button type={step === 3 ? 'primary' : 'default'}>Step 3</Button>
      <Button type={step === 4 ? 'primary' : 'default'}>Review</Button>
    </div>
  );
};

export default Header;
