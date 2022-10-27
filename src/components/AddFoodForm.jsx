import { Divider, Input } from 'antd';
import { useState } from "react";


// Iteration 4
export default function AddFoodForm({addFoodHandler}) {
    const [name, setName] = useState("")
    const [calories, setCalories] = useState("")
    const [image, setImage] = useState("")
    const [servings, setServings] = useState("")

    const submitForm = (e) => {
        e.preventDefault();
        addFoodHandler({
            name,
            calories,
            image,
            servings
        })
    }

    const nameHandler = (e) => {
        setName(e.target.value)
        console.log('NAME TARGET VALUE-------', e.target.value)
    }
    const caloriesHandler = (e) => {
        setCalories(e.target.value)
    }
    const imageHandler = (e) => {
        setImage(e.target.value)
    }
    const servingsHandler = (e) => {
        setServings(e.target.value)
    }

  return (
    <form onSubmit={submitForm}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={undefined} type="text" onChange={nameHandler} />

      <label>Image</label>
      <Input value={undefined} type="text" onChange={imageHandler} />
      {/* render antd <Input /> type="text" here */}

      <label>Calories</label>
      <Input value={undefined} type="number" onChange={caloriesHandler} />
      {/* render antd <Input /> type="number" here */}

      <label>Servings</label>
      <Input value={undefined} type="number" onChange={servingsHandler} />
      {/* render antd <Input /> type="number" here */}

      <button type="submit">Create</button>
    </form>
  );
}