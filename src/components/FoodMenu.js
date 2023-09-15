import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';



function FoodMenu() {
  
    return (
      <Pagination>
        
        <Pagination.Item active>Food</Pagination.Item>
        <Pagination.Item>Beverage</Pagination.Item>
        <Pagination.Item>Dessert</Pagination.Item>
        
      </Pagination>
    );
  }
  
  export default FoodMenu;