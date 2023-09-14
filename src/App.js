import { useState } from 'react';
import './App.css';
import AddFood from './components/AddFood';
import FoodList from './components/FoodList';
import foodsData from './foods.json';
import SearchBar from './components/SearchBar';

function App() {
  const [foods, setFoods] = useState(foodsData);
  const [allFoods, setAllFoods] = useState(foodsData);

  const addNewFood = (newFood) => {
    const updatedFoods = [...foods, newFood];
    const allUpdatedFoods = [...allFoods, newFood];

    setFoods(updatedFoods);
    setAllFoods(allUpdatedFoods);
  };

  const deleteFood = (foodName) => {
    const updatedFoods = [...foods]
    const allUpdatedFoods = [...allFoods];
   
    const filteredFoods = updatedFoods.filter((food) => {
      return (!(food.name === foodName));
    });
    const allFilteredFoods = allUpdatedFoods.filter((food) => {
    return (!(food.name === foodName));
    });


    setFoods(filteredFoods);
    setAllFoods(allFilteredFoods);
  }

  const filterFoods = (str) => {
    let filteredFoods;
    if (str === "")
    {
      filteredFoods = allFoods;
    }
    else {
      filteredFoods = allFoods.filter(food => {
        return (food.name.toLowerCase().includes(str.toLowerCase()));
      })
    }
    
    setFoods(filteredFoods);
  }

  return (
    <div>
      <AddFood addFood={addNewFood} />
      <SearchBar filterSearch={filterFoods} />
      <FoodList foodsList={foods} deleteFunction={deleteFood}/>
    </div>
  );
}

export default App;
