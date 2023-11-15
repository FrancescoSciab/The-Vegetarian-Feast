import { Link, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Meal from './Meal';


function MealItems(props) {
  
  const mealTypes = ["main course 🥘", "side dish 🍛", "dessert", "appetizer 🥪", "salad 🥗", "bread 🥖", "breakfast 🥛", "soup 🍜", "beverage 🍹", "sauce 🍯", "marinade 🍲", "fingerfood 🍟", "snack 🍿", "drink 🍸"]
    
    return (
    <>
        <Routes>

          <Route path="*" element={
            <CardGroup 
            style={
              {
                display:"flex", 
                flexDirection:"row",  
                overflow:"scroll",
                }}>
    
                    {mealTypes.map((mealType) => (
                        <Card style={{
                          flex: "0 0 auto", 
                          maxWidth: "50%", 
                          margin: "0 16px 8px 0"
                          }}>
                        <Card.Img variant="top" />
                        <Card.Body style={{borderRadius: "0.75rem"}}>
                          <Card.Title>
                            {mealType}
                            </Card.Title>
                          <Card.Text>
                            Check out our new {mealType} ideas
                          </Card.Text>
                          <Button variant="primary"><Link to={mealType}>Go Somewhere: {mealType}</Link></Button>
                        </Card.Body>
                      </Card> 
                    ))}
    
            </CardGroup>
          } />

          <Route path=':mealType/*' element={<Meal client={props.client} mealTypes={mealTypes} />} />

        </Routes>
    </>
    );
  }
  
  export default MealItems;
  