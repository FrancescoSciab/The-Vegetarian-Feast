import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/Card';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import Ingredients from './Ingredients';
import { Animate } from "react-simple-animate";
import ErrorPage from '../../error-page';
import Placeholder from 'react-bootstrap/Placeholder';



const cache = {};

export default function Meal(props) {

    
    const { mealType } = useParams();
    const [meals, setMeals] = useState({
      loading: true,
      response: [],
      error: null
    });//when mealtype changes the api call will be triggered
    const location = useLocation()
    
  useEffect(() => {
    
    if (cache[mealType]) {
      setMeals(cache[mealType]);
  } else {
      props.client.get(`/recipes/random?apiKey=8f5c95ab5ba54f428feb304dac547182&tags=${mealType}&number=100`)
      .then(response => {
      //handle success
      cache[`${meals}`] = response.data.recipes;
      setMeals({
        loading: false,
        response: response.data.recipes,
        error: null
      })
      })
      .catch(error => {
      // handle error
      setMeals({
        loading: false,
        response: null,
        error: <ErrorPage />
      })})
      .finally(function() {
      // always executed 
      });
      }
  
    
    }, [mealType, location.pathname, props.client])


    return (
      
      <>
      {meals.error ? <ErrorPage /> : null}
      <Routes>

<Route path="*" element={
  
        meals.loading 

        ? 
        (
          <>
            {Array.from({ length: 6 }).map((_, index) => (
    
              <Card id="card-meal" key={`placeholder-${index}`}>
                <Card.Body id="card-body-meal">
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={6} /> <Placeholder xs={8} />
                    <Placeholder.Button variant="primary" xs={6} />
                  </Placeholder>
                </Card.Body>
              </Card>
            ))}
          </>
        )
       
        :

        (
          <CardGroup id="card-group-meal">
            {meals.response && meals.response.map((meal) => (
    
              <Animate play 
              start={{ opacity: 0 }} 
              end={{ opacity: 1 }} 
              duration={0.75}>
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
              </Animate> 
            ))}
            </CardGroup>
            )
  } />

<Route 
path='overview/:id' 
element={<Ingredients 
          client={props.client}
          mealType={mealType}
          />} />

</Routes>
      
      
      </>)
}