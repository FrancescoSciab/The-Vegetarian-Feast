import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';



function FoodMenu() {
  const [active, setActive] = useState(true)
  
    
  
  
  
    return (
      <Pagination>
        
        <Pagination.Item  active><Link to={"/"}>Food</Link></Pagination.Item>
        <Pagination.Item><Link to={"/beverage"}>Beverage</Link></Pagination.Item>
        <Pagination.Item><Link to={"/dessert"}>Dessert</Link></Pagination.Item>
        
      </Pagination>
    );
  }
  
  export default FoodMenu;