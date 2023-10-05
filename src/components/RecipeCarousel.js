import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

const cache = {};

export default function RecipeCarousel(props) {

    
    return (
        
        <Carousel interval={null}>
            <Carousel.Item>{props.randomFood}
                </Carousel.Item>
        </Carousel>
        
    )
}