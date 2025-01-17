import { useState } from "react";
import "./App.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import { Row } from "antd";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";

function App() {
  const [foodData, setFoodData] = useState(foods)
  const [food, setFood] = useState(foods)
 
  
  const addNewFood = (newFood) => {
    console.log(newFood)
    const updatedFoodData = [...foodData, newFood];
    const updatedFood = [...food, newFood];

    setFoodData(updatedFoodData)
    setFood(updatedFood)
  }

  const searchFilter = (text) => {
    setFood(
      foods.filter((food) => {
        return food.name.toLowerCase().includes(text.toLowerCase());
      })
    );
  };
  
  const deleteFood = (name) => {
    const deleteByName = food.filter((deleteOne) => deleteOne.name !== name);
    setFood(deleteByName);
  };

  return (
  <div className="App">
    
    <AddFoodForm addFood={addNewFood}/> <br/>
    <Search searchFilter={searchFilter}/>
    
    <Row>
      {food.map((foodArr) => {
          return(
            <FoodBox 
              key={foodArr._id}
              foodList={foodArr}
              deleteFood={deleteFood}
            />
          )})}
    </Row>
  </div>);
}

export default App;