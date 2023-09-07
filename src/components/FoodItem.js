import Pagination from 'react-bootstrap/Pagination';
import axios from 'axios';
import { useEffect, useState } from 'react';
// API call to be moved to root component (?)
const cache = {};

function FoodItem() {
    const [dishTypes, setDishTypes] = useState(null); //to be set to null
    
    useEffect(() => {
        if (cache["dishTypes"]) {
            setDishTypes(cache['dishTypes']);
        } else {
            axios.get('https://api.spoonacular.com/recipes/716429/information?apiKey=8f5c95ab5ba54f428feb304dac547182&includeNutrition=false')
            .then( response => {
            //handle success
            cache['dishTypes'] = response;
            setDishTypes(response.data.dishTypes)
            })
            .catch(function (error) {
            // handle error
            console.log(error);
            })
            .finally(function () {
            // always executed 
            }, []);
            }
        })
    
    return (
        // It only runs when dishtypes is not null
      <Pagination>

        {dishTypes && dishTypes.map((dishType) => (
            <Pagination.Item key={dishType.id}>{dishType}</Pagination.Item>
        ))}
        
      </Pagination>
    );
  }
  
  export default FoodItem;