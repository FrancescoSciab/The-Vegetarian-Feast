import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

const cache = {};
const client = axios.create({
    baseURL: "https://api.spoonacular.com"
  });

export default function Lunch() {
    
    const [lunches, setLunches] = useState({});

  useEffect(() => {
    if (cache["lunches"]) {
        setLunches(cache["lunches"]);
    } else {
        client.get("/food/search?apiKey=8f5c95ab5ba54f428feb304dac547182")
        .then(response => {
        //handle success
        cache["lunches"] = response.data.searchResults[0].results[0];
        setLunches(response.data.searchResults[0].results[0])
        })
        .catch(function(error) {
        // handle error
        console.log(error);
        })
        .finally(function() {
        // always executed 
        });
        }
    },)

    return (
     <div className="d-flex justify-content-around">
        
        
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={lunches.image} />
        <Card.Body>
          <Card.Title>{lunches.name}</Card.Title>
          <Card.Text>
            {console.log(lunches)}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> 
      
    </div>
    )
}