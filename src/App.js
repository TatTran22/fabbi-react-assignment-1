import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Meal from './components/Meal';
import Restaurants from './components/Restaurants';
import Dish from './components/Dish';
import './App.css';
import data from './data/dishes.json';

function App() {
  const [step, setStep] = useState(1);
  const [meal, setMeal] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState('');
  const [afterStep1, setAfterStep1] = useState([]);
  const [afterStep2, setAfterStep2] = useState([]);
  const [afterStep3, setAfterStep3] = useState([]);
  const [selectedDishes, setSelectedDishes] = useState([]);

  const removeDuplicates = (data) => {
    return data.filter((value, index) => data.indexOf(value) === index);
  };

  const handleStepClick = (e) => {
    setStep(e);
  };

  const handleSelectedMeal = (e) => {
    setMeal(e);

    const result1 = data.dishes.filter((meal) => meal.availableMeals.includes(e));
    setAfterStep1(result1);
    // console.log(result1);

    const rtr = result1.map((e) => e.restaurant);
    const r = removeDuplicates(rtr);
    setRestaurants(r);
  };

  const handleSelectedRestaurant = (e) => {
    setSelectedRestaurant(e);
    const result2 = afterStep1.filter((meal) => meal.restaurant.includes(e));
    setAfterStep2(result2);
    // console.log(result2);
  };

  const handleSelectedDish = (e) => {
    setSelectedDishes(e);
    // console.log(selectedDishes);
  };

  // const handleSelectedServings = (e) => {
  //   setServings(e);
  // };

  console.log(`Meal: ${meal}, Restaurant: ${selectedRestaurant}, Dishes: ${selectedDishes}`);
  return (
    <div className='App'>
      <div className='container'>
        <Header step={handleStepClick} />
        {step === 1 ? (
          <Meal meal={meal} selectedMeal={handleSelectedMeal} />
        ) : step === 2 ? (
          <Restaurants restaurants={restaurants} selectedRestaurant={handleSelectedRestaurant} r={selectedRestaurant} />
        ) : step === 3 ? (
          <Dish dishes={afterStep2} selected={handleSelectedDish} />
        ) : (
          ''
        )}

        <Footer
          step={step}
          page={handleStepClick}
          meal={meal}
          restaurant={selectedRestaurant}
          dishes={selectedDishes}
        />
      </div>
    </div>
  );
}

export default App;
