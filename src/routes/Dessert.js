import axios from "axios";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Ingredients from "./Overview";
import { Link, Outlet, Route, Routes } from "react-router-dom";



const cache = {};
const client = axios.create({
    baseURL: "https://api.spoonacular.com"
  });

export default function Dessert() {
    const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    if (cache["desserts"]) {
        setDesserts(cache["desserts"]);
    } else {
        client.get("/recipes/complexSearch?apiKey=8f5c95ab5ba54f428feb304dac547182&type=dessert")
        .then(response => {
        //handle success
        cache["desserts"] = response.data.results;
        setDesserts(response.data.results)
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
        <>
        <CardGroup style={{display:"flex", flexDirection:"row", width:"100vw", overflow:"scroll"}}>
        {desserts.map((dessert) => (
            <Card style={{flex: "0 0 auto", maxWidth: "50%"}} key={dessert.id}>
            <Card.Img variant="top" src={dessert.image} />
            <Card.Body>
              <Card.Title>{dessert.title}</Card.Title>
              <Card.Text>
                
              </Card.Text>
              <Button variant="primary"><Link to={`overview/${dessert.id}`}>Go to ID: {dessert.id}</Link></Button>
            </Card.Body>
          </Card> 
        ))}
        </CardGroup>
        </>  
        )
}
