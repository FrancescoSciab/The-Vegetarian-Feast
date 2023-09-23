
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/Card';



function FoodMenu() {
  const [active, setActive] = useState(true)
  
    
  
  
  
    return (

      <>
        <CardGroup style={{flexDirection:"row", width:"100vw", overflow:"scroll"}}>

                <Card style={{flex: "0 0 auto", maxWidth: "50%"}}>
                <Card.Img variant="top" />
                <Card.Body>
                  <Card.Title>Food</Card.Title>
                  <Card.Text>
                    Check out our new lunch ideas
                  </Card.Text>
                  <Button variant="primary"><Link to={"/"}>Go Somewhere</Link></Button>
                </Card.Body>
              </Card> 

              <Card style={{flex: "0 0 auto", maxWidth: "50%"}}>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>Beverage</Card.Title>
              <Card.Text>
                Check out our new lunch ideas
              </Card.Text>
              <Button variant="primary"><Link to={"/beverage"}>Go Somewhere</Link></Button>
            </Card.Body>
          </Card> 

          <Card style={{flex: "0 0 auto", maxWidth: "50%"}}>
                <Card.Img variant="top" />
                <Card.Body>
                  <Card.Title>Desserts</Card.Title>
                  <Card.Text>
                    Check out our new lunch ideas
                  </Card.Text>
                  <Button variant="primary"><Link to={"/dessert"}>Go Somewhere</Link></Button>
                </Card.Body>
              </Card> 

        </CardGroup>
    
    </>
      
        
        
    );
  }
  
  export default FoodMenu;