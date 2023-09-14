import FoodCard from './FoodCard';

const FoodList = ({ foodsList, deleteFunction}) => {

  return (
    <div className="container text-center">
      <h2>Food List</h2>
      <div className="row justify-content-center gx-2 gy-4 my-3 row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
        { foodsList.length 
            ? foodsList.map((food, k) => {
          return (
            <div className="col-sm" key={k}>
              <FoodCard foodData={food} deleteFunction={deleteFunction} />
            </div>
          );
        })
            : <p>There is no more food :-(</p>
        }
      </div>
    </div>
  );
};

export default FoodList;
