import Pagination from 'react-bootstrap/Pagination';
import axios from 'axios';
import { useEffect, useState } from 'react';

function FoodItem(props) {
    const [dishTypes, setDishTypes] = useState([]);
    
    useEffect(() => {
        axios.get('https://api.spoonacular.com/recipes/716429/information?apiKey=8f5c95ab5ba54f428feb304dac547182&includeNutrition=false')

        .then( response => {
        // handle success
        setDishTypes(response.data.dishTypes)
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
        .finally(function () {
        // always executed 
        }, []);
    })
    
    return (
      <Pagination>

        {dishTypes.map((dishType) => (
            <Pagination.Item key={dishType.id}>{dishType}</Pagination.Item>
        ))}
        
      </Pagination>
    );
  }
  
  export default FoodItem;