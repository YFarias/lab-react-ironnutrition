import { Input} from "antd";
import { useState } from "react";

function AddFoodForm(props) {
    const [name,setName] = useState ("")
    const [image,setImage] = useState ("")
    const [calories,setCalories] = useState(0)
    const [servings,setServings] = useState(0)
    
    const cacthNameInput = (event) => setName(event.target.value)
    const cacthImageInput = (event) => setImage(event.target.value)
    const cacthCaloriesInput = (event) => setCalories(event.target.value)
    const cacthServingInput = (event) => setServings(event.target.value)
    
    const cacthSubmitInput = (event) => {
        event.preventDefault()
        const newFood = {
            name,
            image,
            calories ,
            servings
        };

        props.addFood(newFood)

        setName("")
        setImage("")
        setCalories(0)
        setServings(0)

    } 

    return (
        
        <div className = "addFood">

            <form onSubmit={cacthSubmitInput}>
                <label>Name</label>
                <Input type="text" value={name} onChange={cacthNameInput}/>                
                
                <label>Image</label>
                <Input type="text" value={image} onChange={cacthImageInput} />

                <label>Calories</label>
                <Input type="number" value={calories} onChange={cacthCaloriesInput}/>

                <label>Servings</label>
                <Input type="number" value={servings} onChange={cacthServingInput} />

                <button type="submit">Add food</button>

            </form> 
        </div>
    );
}

export default AddFoodForm;