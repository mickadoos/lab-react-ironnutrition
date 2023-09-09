import React, { useState } from 'react';

const AddFood = ({addFood}) => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    const handleNameInput = e => setName(e.target.value);
    const handleImageInput = e => setImage(e.target.value);
    const handleCaloriesInput = e => setCalories(e.target.value);
    const handleServingsInput = e => setServings(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        const newFood = { name, image, calories, servings};

        addFood(newFood);
        setName("");
        setImage("");
        setCalories(0);
        setServings(0);
    }   

  return (
    <div className="container my-5 text-center">
      <h2>Add Food Entry</h2>
      <form className="row gy-3" onSubmit={handleSubmit}>
        <div className="col">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="inputName" name='name' value={name} onChange={handleNameInput}/>
          <label htmlFor="inputImage" className="form-label">
            Image
          </label>
          <input type="text" className="form-control" id="inputImage" name='image' value={image} onChange={handleImageInput} placeholder='https://i.imgur.com/93ekwW0.jpg' />
          <label htmlFor="inputCalories" className="form-label">
            Calories
          </label>
          <input type="number" className="form-control" id="inputCalories" name='calories' value={calories} onChange={handleCaloriesInput} />
          <label htmlFor="inputServings" className="form-label">
            Servings
          </label>
          <input type="number" className="form-control" id="inputServings" name='servings' value={servings} onChange={handleServingsInput} />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFood;
