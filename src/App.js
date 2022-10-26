import './App.css';
import foods from './foods.json'
import { useState } from 'react';
import FoodBox from './components/FoodBox';



function App() {
  const [foodsList, setFoodsList] = useState(foods)

  return (
    <div className="App">
      {foodsList.map(element => {
      return <FoodBox key={element.name} food={element}/>  
    })}

    </div>
  );
}

export default App;
