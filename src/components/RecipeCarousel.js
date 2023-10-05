import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

const cache = {};

export default function RecipeCarousel(props) {

    
    return (
        
        <Carousel interval={null}>
            {props.randomFood && props.randomFood.map((food) => (
                <Carousel.Item>
                    <img src={`${food.image}`}></img>
                    <Carousel.Caption>
                        <h3>{food.name}</h3>
                        <p>{food.content}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}