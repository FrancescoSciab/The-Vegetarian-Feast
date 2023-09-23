import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/Card';
// API call to be moved to root component (?)


function FoodItem(props) {
    
    return (
    <>
        <CardGroup>

                <Card>
                <Card.Img variant="top" />
                <Card.Body>
                  <Card.Title>Lunch</Card.Title>
                  <Card.Text>
                    Check out our new lunch ideas
                  </Card.Text>
                  <Button variant="primary"><Link to={"/lunch"}>Go Somewhere</Link></Button>
                </Card.Body>
              </Card> 

        </CardGroup>
    </>
    );
  }
  
  export default FoodItem;