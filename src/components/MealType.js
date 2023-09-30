import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
// API call to be moved to root component (?)



function MealItems(props) {
  const mealTypes = ["main course", "side dish", "dessert", "appetizer", "salad", "bread", "breakfast", "soup", "beverage", "soup", "beverage", "sauce", "marinade", "fingerfood", "snack", "drink"]
    
    return (
    <>
        <CardGroup style={{display:"flex", flexDirection:"row", width:"100vw", overflow:"scroll"}}>

                {mealTypes.map((mealType) => (
                    <Card style={{flex: "0 0 auto", maxWidth: "50%"}}>
                    <Card.Img variant="top" />
                    <Card.Body>
                      <Card.Title>{mealType}</Card.Title>
                      <Card.Text>
                        Check out our new {mealType} ideas
                      </Card.Text>
                      <Button variant="primary"><Link to={`${mealType}`}>Go Somewhere: {mealType}</Link></Button>
                    </Card.Body>
                  </Card> 
                ))}

        </CardGroup>
    </>
    );
  }
  
  export default MealItems;