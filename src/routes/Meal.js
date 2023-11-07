import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';

const cache = {};

export default function Meal(props) {

    const { mealType } = useParams();
    const [meals, setMeals] = useState([mealType]);//when mealtype changes the api call will be triggered
    
  useEffect(() => {
    if (cache[`${meals}`]) {
        setMeals(cache[`${meals}`]);
    } else {
        props.client.get(`/recipes/complexSearch?apiKey=8f5c95ab5ba54f428feb304dac547182&type=${mealType}&number=100`)
        .then(response => {
        //handle success
        cache[`${meals}`] = response.data.results;
        setMeals(response.data.results)
        })
        .catch(function(error) {
        // handle error
        console.log(error);
        })
        .finally(function() {
        // always executed 
        });
        }
    }, [mealType])

    return (
      mealType !== "searchbar"
      &&
     <>
    <CardGroup 
      style={
        {
          flexDirection:"row", 
          width:"100vw", 
          overflow:"scroll",
          }
          }>
        {meals.map((meal) => (
            <Card key={meal.id} style={{
              flex: "0 0 auto", 
              maxWidth: "50%",
              margin: "0 16px 8px 0"
              }}>
            <Card.Img variant="top" src={meal.image} 
            style={
              {
                borderTopLeftRadius: "0.75rem",
                borderTopRightRadius: "0.75rem"}} />
            <Card.Body 
            style={
              {
                borderBottomLeftRadius: "0.75rem",
                borderBottomRightRadius: "0.75rem"}}>
              <Card.Title>{meal.title}</Card.Title>
              <Card.Text>
              </Card.Text>
              <Button variant="primary"><Link to={`overview/${meal.id}`}>View Recipe</Link></Button>
            </Card.Body>
          </Card> 
        ))}
    </CardGroup>
    </>
    )
}