import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import Container from 'react-bootstrap/esm/Container';

const cache = {};
const client = axios.create({
    baseURL: "https://api.spoonacular.com"
  });

export default function Lunch() {
    
    const [lunches, setLunches] = useState([]);

  useEffect(() => {
    if (cache["lunches"]) {
        setLunches(cache["lunches"]);
    } else {
        client.get("/food/search?apiKey=8f5c95ab5ba54f428feb304dac547182")
        .then(response => {
        //handle success
        cache["lunches"] = response.data.searchResults[0].results;
        setLunches(response.data.searchResults[0].results)
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
     
        <CardGroup style={{flexDirection:"row", width:"100vw", overflow:"scroll"}}>
        {lunches.map((lunchItem) => (
            <Card style={{flex: "0 0 auto", maxWidth: "50%"}}>
            <Card.Img variant="top" src={lunchItem.image} />
            <Card.Body>
              <Card.Title>{lunchItem.name}</Card.Title>
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