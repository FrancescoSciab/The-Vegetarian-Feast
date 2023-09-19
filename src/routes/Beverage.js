import axios from "axios";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';



const cache = {};
const client = axios.create({
    baseURL: "https://api.spoonacular.com"
  });

export default function Beverage() {
    const [beverages, setBeverages] = useState([]);

  useEffect(() => {
    if (cache["beverages"]) {
        setBeverages(cache["beverages"]);
    } else {
        client.get("/recipes/complexSearch?apiKey=8f5c95ab5ba54f428feb304dac547182&type=beverage")
        .then(response => {
        //handle success
        cache["beverages"] = response.data.results;
        setBeverages(response.data.results)
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
    return (
        <CardGroup style={{display:"flex", flexDirection:"row", width:"100vw", overflow:"scroll"}}>
        {beverages.map((beverage) => (
            <Card style={{flex: "0 0 auto", maxWidth: "50%"}} key={beverage.id}>
            <Card.Img variant="top" src={beverage.image} />
            <Card.Body>
              <Card.Title>{beverage.title}</Card.Title>
              <Card.Text>
                {}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card> 
        ))}
        </CardGroup>
    )
}
