import { Link, Route, Routes } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Meal from './Meal';
import { Animate } from "react-simple-animate";


function MealItems(props) {
  
  const mealTypes = ["main course 🥘", "side dish 🍛", "dessert", "appetizer 🥪", "salad 🥗", "bread 🥖", "breakfast 🥛", "soup 🍜", "beverage 🍹", "sauce 🍯", "marinade 🍲", "fingerfood 🍟", "snack 🍿", "drink 🍸"]
    
    return (
    <>
        <Routes>

          <Route path="*" element={
            <Animate play 
                      start={{ opacity: 0 }} 
                      end={{ opacity: 1 }} 
                      duration={0.75}>
              <CardGroup id="card-group-meal">
    
                    {mealTypes.map((mealType) => (
                        <Card id="card-meal">
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
            </Animate>
          } />

          <Route path=':mealType/*' element={<Meal client={props.client} mealTypes={mealTypes} />} />

        </Routes>
    </>
    );
  }
  
  export default MealItems;
  