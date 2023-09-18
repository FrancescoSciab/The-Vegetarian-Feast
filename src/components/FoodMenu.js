import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';



function FoodMenu() {
  
    return (
      <Pagination>
        
        <Pagination.Item active>Food</Pagination.Item>
        <Pagination.Item><Link to={"/beverage"}>Beverage</Link></Pagination.Item>
        <Pagination.Item>Dessert</Pagination.Item>
        
      </Pagination>
    );
  }
  
  export default FoodMenu;