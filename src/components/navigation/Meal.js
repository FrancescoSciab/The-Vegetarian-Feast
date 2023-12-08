import { useEffect, useState, Suspense } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/Card';
import { Link, Route, Routes, useParams } from 'react-router-dom';
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
      errorCode: null
    });//when mealtype changes the api call will be triggered
    
  useEffect(() => {
    
    if (cache[mealType]) {
      setMeals({
        loading: false,
        response: cache[mealType],
        errorCode: null
      })
  } else {
      props.client.get(`/recipes/random?apiKey=8f5c95ab5ba54f428feb304dac547182&tags=${mealType}&number=100`)
      .then(response => {
      //handle success
      cache[mealType] = response.data.recipes;
      setMeals({
        loading: false,
        response: response.data.recipes,
        errorCode: null
      })
      })
      .catch(error => {
      // the error is gonna be loaded below before rendering
        setMeals({
          loading: false,
          response: null,
          errorCode: error.request.status
        })
      })
      .finally(function() {
      // always executed 
      });
      }
    }, [mealType, props.client])


    return (
      
      <>
      {meals.errorCode ? <ErrorPage errorStatus={meals.errorCode}/> : null}
      <Routes>

<Route path="*" element={
  
        meals.loading 
        ? 
        (
          <CardGroup id="card-group-placeholder">
            {Array.from({ length: 12 }).map((_, index) => (
              <Card id="placeholder-card" key={`placeholder-${index}`}>
                <Card.Body id="placeholder-card-body">
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
          </CardGroup>
        )
       
        :

        (
          <CardGroup id="card-group-meal">
            {meals.response && meals.response.map((meal, index) => (
    
              <Animate play 
              key={meal}
              sequenceIndex={index}
              start={{ opacity: 0, transform: 'translateX(20px)' }}
              end={{ opacity: 1, transform: 'translateX(0)' }}>
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
element={
<Suspense fallback={<div>Loading...</div>}>
  <Ingredients 
          client={props.client}
          mealType={mealType}
          />
          </Suspense>
          } 
          />

</Routes>
      
      
      </>)
}