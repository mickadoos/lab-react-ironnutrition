import { useState } from 'react';
import './App.css';
import AddFood from './components/AddFood';
import FoodList from './components/FoodList';
import foodsData from './foods.json';

function App() {
  const [foods, setFoods] = useState(foodsData);

  const addNewFood = (newFood) => {
    const updatedFoods = [...foods, newFood];
    setFoods(updatedFoods);
  }

  return (
    <div className="App">
      <AddFood addFood={addNewFood}/>
      <FoodList foodsList={foods} />
    </div>
  );
}

export default App;
