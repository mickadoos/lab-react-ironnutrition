import React from 'react';

const FoodCard = ({ foodData, deleteFunction, toDelete }) => {
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
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
          <button
            className="btn btn-primary"
            onClick={() => deleteFunction(foodData.name)}
          >
            Delete
          </button>
          <button
            className="btn btn-danger"
            onClick={() => toDelete(1)}
          >
            Delete 2
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
