import Carousel from 'react-bootstrap/Carousel';

import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Overview from '../routes/Overview';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

const cache = {};

export default function RecipeCarousel(props) {

    
    const selectedFood = props.randomFood
    const [position, setPosition] = useState(0)
    

    function updateIndex() {
        const carouselItems = Array.from(document.getElementsByClassName("carousel-item"))
            let activeCarouselItem = carouselItems.findIndex((item) => item.classList.contains("active"))
            
            if (activeCarouselItem !== -1) {
                setPosition(activeCarouselItem);
              }
    }
  
    return (
        <>
        <Carousel 
        
        fade={true} 
        indicators={false} 
        pause={"hover"} 
        touch={"true"}
        onSlid={updateIndex}
        >
            {selectedFood && selectedFood.map((food) => (
               
                <Carousel.Item key={food.id}>
                    <img src={`${food.image}`} style={{width: "50%", borderRadius: "0.75rem"}}></img>
                    <Carousel.Caption> 
                    <Link to={`mealtype/overview/${food.id}`}><h3>{food.name}</h3></Link>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>

        <Col sm={4} id="desktop-ingredients-col">
            <Row>
                <Overview food={selectedFood} position={position} />
            </Row>
        </Col>
        </>
    )
}