import React, { useState, useEffect } from 'react';
import { Input, Select, InputNumber } from 'antd';

import FormItem from 'antd/lib/form/FormItem';
import './Meal.css';

const { Option } = Select;

const Meal = ({ selectedMeal, meal }) => {
  const meals = ['breakfast', 'lunch', 'dinner'];
  // const [isInvalid, setIsInvalid] = useState(false);
  const [error, setError] = useState('');

  const handleOnchangePeople = (value) => {
    console.log(`Number people: ${value}`);
  };

  const handleSelectMeal = (e) => {
    // setIsInvalid(false);
    selectedMeal(e);
  };

  useEffect(() => {
    if (!meal) {
      // setIsInvalid(true);
      setError(true);
    } else {
      // setIsInvalid(false);
      setError(false);
    }
    console.log(meal);
    // return () => {
    //   cleanup
    // }
  }, [meal]);

  return (
    <div className='meal'>
      <label>
        Please Select a meal:<div className='error-tool-tip'>{error}</div>
      </label>
      <Input.Group compact>
        <FormItem
          // label={index === 0 ? 'Please Select a Dish:' : ''}
          hasFeedback
          validateStatus={error ? 'error' : 'success'}
        >
          <Select defaultValue={meal} onChange={handleSelectMeal}>
            {meals.map((e, i) => {
              return (
                <Option key={i} value={e}>
                  {e}
                </Option>
              );
            })}
          </Select>
        </FormItem>
      </Input.Group>

      <label>Please Enter Number of people</label>
      <InputNumber min={1} max={10} defaultValue={3} onChange={handleOnchangePeople} />
    </div>
  );
};

export default Meal;
