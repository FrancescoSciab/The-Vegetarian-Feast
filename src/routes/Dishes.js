import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/Card';
import { Link, Route, Routes } from 'react-router-dom';

const cache = {};

export default function Lunch(props) {

    const [lunches, setLunches] = useState([]);

  useEffect(() => {
    if (cache["lunches"]) {
        setLunches(cache["lunches"]);
    } else {
        props.client.get("/recipes/complexSearch?apiKey=8f5c95ab5ba54f428feb304dac547182&type=soup&cuisine=italian")
        .then(response => {
        //handle success
        cache["lunches"] = response.data;
        setLunches(response.data)
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
    console.log(lunches)

    return (
     <>
    <CardGroup style={{flexDirection:"row", width:"100vw", overflow:"scroll"}}>
        {lunches.map((lunchItem) => (
            <Card key={lunchItem.id} style={{flex: "0 0 auto", maxWidth: "50%"}}>
            <Card.Img variant="top" src={lunchItem.image} />
            <Card.Body>
              <Card.Title>{lunchItem.name}</Card.Title>
              <Card.Text>
                {}
              </Card.Text>
              <Button variant="primary"><Link to={`overview/${lunchItem.id}`}>Go to: {lunchItem.id}</Link></Button>
            </Card.Body>
          </Card> 
        ))}
    </CardGroup>
    </>
    )
}