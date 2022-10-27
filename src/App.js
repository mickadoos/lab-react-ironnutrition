import './App.css';
import foods from './foods.json'
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';




function App() {
  const [foodsList, setFoodsList] = useState(foods)

  const addFood = (food) => {
    const foodMod = [...foodsList, food]
    setFoodsList(foodMod)
  }

  const displayFood = () => {
    const viewFood = foodsList.map(element => {
      return <FoodBox key={element.name} food={element} deleteThis={deleteFood}/>  
    })
    return viewFood;
  }
  const searchFood = (foodName) => {
    foodName = foodName.toLowerCase();
    const resutlFood = foodsList.filter(food => {
      return food.name.includes(foodName)
    })
    setFoodsList(resutlFood);
  }

  const deleteFood = (foodName) => {
    console.log(foodName)
    const foodMod = foodsList.filter(food => food.name !== foodName)
    setFoodsList(foodMod);
  }

  return (
    <div className="App">
    <h1>Search</h1>
    <Search search={searchFood} />

    <h1>Add Food Entry</h1>
    <AddFoodForm addFoodHandler={addFood}/>

    <h1>Food List</h1>
    <Row style={{ width: '100%', justifyContent: 'center' }}>
        {displayFood()}
      </Row>

    </div>
  );
}

export default App;
