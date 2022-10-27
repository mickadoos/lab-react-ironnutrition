import { Card, Col, Button } from 'antd';

export default function FoodBox({food, deleteThis}) {

    const deleteHandler = () => {
        deleteThis(food.name)
    }

    return (
        <Col>
      <Card
        title={food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.sevings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings} </b> kcal
        </p>
        <Button type="primary" onClick={deleteHandler}> Delete </Button>
      </Card>
    </Col>
    )
}