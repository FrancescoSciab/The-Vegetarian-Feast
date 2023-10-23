import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const cache = {};

export default function RecipeCarousel(props) {

    
    const selectedFood = props.randomFood
  
    return (
        <Carousel fade={true} indicators={false} pause={"hover"} touch={"true"}>
            {selectedFood && selectedFood.map((food) => (
                <Carousel.Item>
                    
                    <img src={`${food.image}`} style={{width: "50%", borderRadius: "0.75rem"}}></img>
                    <Carousel.Caption>
                    <Link to={`mealtype/overview/${food.id}`}><h3>{food.name}</h3></Link>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}