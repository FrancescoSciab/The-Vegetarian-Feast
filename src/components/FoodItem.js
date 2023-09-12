import Pagination from 'react-bootstrap/Pagination';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// API call to be moved to root component (?)


function FoodItem(props) {
    
    return (
        // It only runs when dishtypes is not null
      <Pagination>

        {props.dishTypes && props.dishTypes.map((dishType) => (
            <Link to={`/${dishType}`}><Pagination.Item>{dishType}</Pagination.Item></Link>
        ))}
        
      </Pagination>
    );
  }
  
  export default FoodItem;