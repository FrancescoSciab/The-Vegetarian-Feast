import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/Card';
import { Link, Route, Routes, useParams } from 'react-router-dom';

const cache = {};

export default function Meal(props) {

    const { mealType } = useParams(); 
    const [meals, setMeals] = useState([]);

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
    }, [])
    console.log(mealType)

    return (
     <>
    <CardGroup style={{flexDirection:"row", width:"100vw", overflow:"scroll"}}>
        {meals.map((meal) => (
            <Card key={meal.id} style={{flex: "0 0 auto", maxWidth: "50%"}}>
            <Card.Img variant="top" src={meal.image} />
            <Card.Body>
              <Card.Title>{meal.name}</Card.Title>
              <Card.Text>
                {`mealType: ${mealType}`}
              </Card.Text>
              <Button variant="primary"><Link to={`overview/:${meal.id}`}>Go to: {meal.id}</Link></Button>
            </Card.Body>
          </Card> 
        ))}
    </CardGroup>
    </>
    )
}