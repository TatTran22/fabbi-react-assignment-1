import React, { useState, useEffect } from 'react';
import { Button, Input, Select, InputNumber } from 'antd';

import './Dish.css';
import FormItem from 'antd/lib/form/FormItem';

const { Option } = Select;
const element = [0];

const Dish = ({ dishes, selected, isInvalid }) => {
  const [select, setSelect] = useState([1]);
  const [errorStatus, setErrorStatus] = useState(true);
  const [num, setNum] = useState(1);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [lastSelected, setLastSelected] = useState();
  let selectedServing = [];
  let ss = [];
  //   const selected = [];

  //   console.log(dishes);

  const handleOnchangeDish = (index, e) => {
    const dh = dishes.filter((d) => d.id === e);
    setLastSelected(dh[0]);

    // console.log(dh);
    if (!selectedDishes.includes(dh[0])) {
      selectedDishes[index] = dh[0];
      console.log(selectedDishes);
    }
  };

  const handleOnchangeServing = (index, e) => {
    selectedServing[index] = e;
    console.log(selectedServing);
  };

  const handleAddSelectClick = () => {
    setErrorStatus(true);
    if (num < dishes.length) {
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
    // if (!selectedDishes.includes(lastSelected)) setErrorStatus(false);
  }, [selectedDishes, lastSelected]);

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
              return (
                <FormItem
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
            <InputNumber key={index} min={1} defaultValue={1} onChange={(e) => handleOnchangeServing(index, e)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dish;
