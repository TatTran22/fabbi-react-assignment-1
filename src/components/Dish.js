import React, { useState, useEffect } from 'react';
import { Button, Input, Select, InputNumber } from 'antd';

import './Dish.css';
import FormItem from 'antd/lib/form/FormItem';
const { Option } = Select;
const element = [0];

const Dish = ({ dishes, selected, isInvalid, servings }) => {
  const [select, setSelect] = useState([1]);
  const [errorStatus, setErrorStatus] = useState(true);
  const [num, setNum] = useState(1);
  const [selectedDishes] = useState([]);
  const [selectedServing] = useState([]);
  const [lastSelected, setLastSelected] = useState();

  const handleOnchangeDish = (index, e) => {
    const dh = dishes.filter((d) => d.id === e);
    setLastSelected(dh[0]);

    if (!selectedDishes.includes(dh[0])) {
      selectedDishes[index] = dh[0];
      // console.log(selectedDishes);
    }
  };

  const handleOnchangeServing = (index, e) => {
    selectedServing[index] = e;
    // console.log(selectedServing);
  };

  const handleAddSelectClick = () => {
    if (num < dishes.length) {
      setErrorStatus(true);
      setNum(num + 1);
      element.push(num);
    }
    // console.log(element);
    setSelect(element);
  };

  const Err = () => (
    <div className='error-tool-tip'>
      <p>*Require</p>
      <p>*Cannot chose duplicate dish</p>
    </div>
  );

  useEffect(() => {
    if (!selectedDishes.includes(lastSelected) || !selectedDishes.includes(undefined) || !selectedDishes.length === 0) {
      setErrorStatus(false);
      selected(selectedDishes);
      servings(selectedServing);
      isInvalid(false);
    }
  }, [selectedDishes, lastSelected, selectedServing]);

  useEffect(() => {
    setErrorStatus(true);
    isInvalid(true);
  }, []);

  return (
    <div className='dishes'>
      <div className='dish'>
        <div className='select-restaurant'>
          <label>
            Please Select a Dish:
            {errorStatus ? <Err /> : ''}
          </label>

          <Input.Group compact>
            {select.map((s, index) => {
              selectedServing[index] = 1;
              return (
                <FormItem
                  key={index}
                  // label={index === 0 ? 'Please Select a Dish:' : ''}
                  hasFeedback
                  validateStatus={
                    !selectedDishes[index] || !selectedDishes.includes(lastSelected) ? 'error' : 'success'
                  }
                >
                  <Select key={index} defaultValue='' onChange={(e) => handleOnchangeDish(index, e)}>
                    {dishes.map((dish) => {
                      return (
                        <Option key={dish.id} value={dish.id}>
                          {dish.name}
                        </Option>
                      );
                    })}
                  </Select>
                </FormItem>
              );
            })}
          </Input.Group>
          <Button type='primary' onClick={handleAddSelectClick}>
            Add
          </Button>
        </div>
        <div className='number-servings'>
          <label>Please enter no. of servings:</label>
          {select.map((s, index) => (
            <FormItem
              // label={index === 0 ? 'Please Select a Dish:' : ''}
              hasFeedback
              // validateStatus={!selectedDishes[index] || !selectedDishes.includes(lastSelected) ? 'error' : 'success'}
            >
              <InputNumber key={index} min={1} defaultValue={1} onChange={(e) => handleOnchangeServing(index, e)} />
            </FormItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dish;
