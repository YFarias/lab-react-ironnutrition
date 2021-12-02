import { Card, Col, Divider, Button } from "antd";

function FoodBox({foodList, deleteFood}) {
    console.log(foodList)
  return ( 
    <Col>
      <Card 
        title = {foodList.name} 
        style = {{width: 230, height:300, margin:10}
        }> 
        <img src={foodList.image} alt="img" width="60px"/>
        <p>calories:{foodList.calories}</p> <br/>
        <p>servings:{foodList.servings}</p> <br/>
        <p>
          <b>Total Calories: {(foodList.calories * foodList.servings)} kcal</b>
        </p>

        <button onClick={() => deleteFood(foodList.name)} className="btn-delete">
          Delete 🗑
        </button>
      </Card>
    </Col>
  );
}

export default FoodBox;