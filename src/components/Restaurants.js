import React, { useState, useEffect } from 'react';
import { Input, Select, InputNumber } from 'antd';

import './Restaurants.css';

const { Option } = Select;

const Restaurants = ({ restaurants, selectedRestaurant, r }) => {
  const [error, setError] = useState('');
  //   console.log(restaurants);
  const handleSelectedRestaurant = (e) => {
    selectedRestaurant(e);
  };

  useEffect(() => {
    if (!r) {
      // setIsInvalid(true);
      setError('*Require!');
    } else {
      // setIsInvalid(false);
      setError('');
    }
    console.log(r);
    // return () => {
    //   cleanup
    // }
  }, [r]);
  return (
    <div className='restaurant'>
      <label>
        Please Select a Restaurant:<div className='error-tool-tip'>{error}</div>
      </label>
      <Input.Group compact>
        <Select defaultValue={r ? r : ''} onChange={handleSelectedRestaurant}>
          {restaurants.map((res, index) => {
            return (
              <Option key={index} value={res}>
                {res}
              </Option>
            );
          })}
        </Select>
      </Input.Group>
    </div>
  );
};

export default Restaurants;
