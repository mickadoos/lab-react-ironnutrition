import React from 'react';

const FoodCard = ({ foodData }) => {
  return (
    <div>
      <div className="card" style={{ width: '18rem'}}>
        <img src={foodData.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{foodData.name}</h5>
          <p className="card-text">Calories: {foodData.calories}</p>
          <p className="card-text">
            Servings: <b>{foodData.servings}</b>
          </p>
          <p className="card-text">
            <b>Total Calories: {foodData.calories * foodData.servings}</b>
          </p>
          <a href="#delete" className="btn btn-primary">
            Delete
          </a>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
