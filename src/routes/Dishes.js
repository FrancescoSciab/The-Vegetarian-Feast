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
    
    const [lunches, setLunches] = useState(null); //to be set to null

  useEffect(() => {
    if (cache["lunches"]) {
        setLunches(cache['lunches']);
    } else {
        client.get("/food/search?apiKey=8f5c95ab5ba54f428feb304dac547182")
        .then( response => {
        //handle success
        let i;
        for (i=0; 1 < response.data.searchResults[0].results.lenght; i++) {
            cache['lunches'] = response.data.searchResults[0].results[i];
            setLunches(response.data.searchResults[0].results[i])
        }})
        .catch(function(error) {
        // handle error
        console.log(error);
        })
        .finally(function() {
        // always executed 
        }, []);
        }
    })

    return (
     <div className="d-flex justify-content-around">
        
        
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          {lunches && <Card.Title>{lunches}</Card.Title>}
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> 
      
    </div>
    )
}