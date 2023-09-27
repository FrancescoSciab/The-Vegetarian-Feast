import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/Card';
// API call to be moved to root component (?)

const cache = {};

function FoodItem(props) {

    const [foodType, setFoodType] = useState([]);

  useEffect(() => {
    if (cache["foodType"]) {
        setFoodType(cache["foodType"]);
    } else {
        props.client.get("food/site/search?apiKey=8f5c95ab5ba54f428feb304dac547182&query=")
        .then(response => {
        //handle success
        cache["foodType"] = response.data;
        setFoodType(response.data)
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
    console.log(foodType)
    
    
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