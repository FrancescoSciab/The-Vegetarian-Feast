import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

function FoodMenu(props) {
    
    return (
      <Pagination>
        
        <Pagination.Item active>{props.text}</Pagination.Item>
        <Pagination.Item>{props.text}</Pagination.Item>
        <Pagination.Item>{props.text}</Pagination.Item>
        
      </Pagination>
    );
  }
  
  export default FoodMenu;