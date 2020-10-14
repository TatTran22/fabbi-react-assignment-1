import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Meal from './components/Meal';
import Restaurants from './components/Restaurants';
import Dish from './components/Dish';
import Review from './components/Review';
import './App.css';
import data from './data/dishes.json';

function App() {
  const [step, setStep] = useState(1);
  const [meal, setMeal] = useState('');
  const [numPeople, setNumPeople] = useState(1);
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState('');
  const [afterStep1, setAfterStep1] = useState([]);
  const [afterStep2, setAfterStep2] = useState([]);
  const [afterStep3, setAfterStep3] = useState(true);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [servings, setServings] = useState([]);

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

  const handleChangePeople = (e) => {
    setNumPeople(e);
  };

  const handleSelectedRestaurant = (e) => {
    setSelectedRestaurant(e);
    const result2 = afterStep1.filter((meal) => meal.restaurant.includes(e));
    setAfterStep2(result2);
    // console.log(result2);
  };

  const handleSelectedDish = (e) => {
    setSelectedDishes(e);
    // console.log(e);
  };

  const handleSelectServings = (e) => {
    setServings(e);
  };

  const handleDishError = (e) => {
    setAfterStep3(e);
    // console.log(e);
  };

  return (
    <div className='App'>
      <div className='container'>
        <Header step={handleStepClick} />
        {step === 1 ? (
          <Meal meal={meal} selectedMeal={handleSelectedMeal} people={handleChangePeople} />
        ) : step === 2 ? (
          <Restaurants restaurants={restaurants} selectedRestaurant={handleSelectedRestaurant} r={selectedRestaurant} />
        ) : step === 3 ? (
          <Dish
            dishes={afterStep2}
            selected={handleSelectedDish}
            isInvalid={handleDishError}
            servings={handleSelectServings}
          />
        ) : (
          <Review
            meal={meal}
            people={numPeople}
            restaurant={selectedRestaurant}
            dishes={selectedDishes}
            servings={servings}
          />
        )}

        <Footer
          step={step}
          page={handleStepClick}
          meal={meal}
          restaurant={selectedRestaurant}
          dishes={selectedDishes}
          people={numPeople}
          valid={afterStep3}
          servings={servings}
        />
      </div>
    </div>
  );
}

export default App;
