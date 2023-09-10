import Pagination from 'react-bootstrap/Pagination';
import { useEffect, useState } from 'react';
// API call to be moved to root component (?)


function FoodItem(props) {
    
    return (
        // It only runs when dishtypes is not null
      <Pagination>

        {props.dishTypes && props.dishTypes.map((dishType) => (
            <Pagination.Item>{dishType}</Pagination.Item>
        ))}
        
      </Pagination>
    );
  }
  
  export default FoodItem;