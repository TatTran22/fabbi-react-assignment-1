import React, { useState, useEffect } from 'react';
import { Input, Select } from 'antd';

import FormItem from 'antd/lib/form/FormItem';
import './Restaurants.css';

const { Option } = Select;

const Restaurants = ({ restaurants, selectedRestaurant, r }) => {
  const [error, setError] = useState(true);
  //   console.log(restaurants);
  const handleSelectedRestaurant = (e) => {
    selectedRestaurant(e);
  };

  useEffect(() => {
    if (!r) {
      // setIsInvalid(true);
      setError(true);
    } else {
      // setIsInvalid(false);
      setError(false);
    }
    // console.log(r);
  }, [r]);
  return (
    <div className='restaurant'>
      <label>
        Please Select a Restaurant:<div className='error-tool-tip'>{error}</div>
      </label>
      <Input.Group compact>
        <FormItem
          // label={index === 0 ? 'Please Select a Dish:' : ''}
          hasFeedback
          validateStatus={error ? 'error' : 'success'}
        >
          <Select defaultValue={r ? r : ''} onChange={handleSelectedRestaurant}>
            {restaurants.map((res, index) => {
              return (
                <Option key={index} value={res}>
                  {res}
                </Option>
              );
            })}
          </Select>
        </FormItem>
      </Input.Group>
    </div>
  );
};

export default Restaurants;
