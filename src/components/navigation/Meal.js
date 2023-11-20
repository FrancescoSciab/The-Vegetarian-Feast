import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/Card';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import Ingredients from './Ingredients';

const cache = {};

export default function Meal(props) {

    
    const { mealType } = useParams();
    const [meals, setMeals] = useState([]);//when mealtype changes the api call will be triggered
    const location = useLocation()
    
  useEffect(() => {
    
    if (cache[mealType]) {
      setMeals(cache[mealType]);
  } else {
      props.client.get(`/recipes/random?apiKey=8f5c95ab5ba54f428feb304dac547182&tags=${mealType}&number=100`)
      .then(response => {
      //handle success
      cache[`${meals}`] = response.data.recipes;
      setMeals(response.data.recipes)
      })
      .catch(function(error) {
      // handle error
      console.log(error);
      })
      .finally(function() {
      // always executed 
      });
      }
  
    
    }, [mealType, location.pathname, props.client])


    return (
      
      <>
      
      <Routes>

<Route path="*" element={
  

<CardGroup id="card-group-meal">
{meals.map((meal) => (
    <Card id="card-meal" key={meal.id} >
    <Card.Img 
      id="card-img-meal" 
      variant="top" 
      src={meal.image} />
    <Card.Body  id="card-body-meal">
      <Card.Title>{meal.title}</Card.Title>
      <Card.Subtitle>
      <div id="recipe-card-info-container">
                <span id="recipe-card-info-span">
                &#x1F550; {meal.readyInMinutes}
                  <span>Minutes</span> 
                </span>

                <span id="recipe-card-info-span">
                &#x1F464; {meal.servings}
                  <span>Servings</span> 
                </span>

                <span id="recipe-card-info-span">
                &#129382; {meal.healthScore}
                  <span>HealthScore</span> 
                </span>
      </div>
        
        </Card.Subtitle>
      <Card.Text>
      </Card.Text>
      <Button variant="primary"><Link to={`overview/${meal.id}`}>View Recipe</Link></Button>
    </Card.Body>
  </Card> 
))}
</CardGroup>

} />

<Route 
path='overview/:id' 
element={<Ingredients 
          client={props.client}
          mealType={mealType}
          />} />

</Routes>
      
      
      </>
    )
}