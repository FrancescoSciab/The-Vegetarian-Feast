import Carousel from "react-bootstrap/Carousel";

import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import Overview from "./Overview";
import Col from "react-bootstrap/esm/Col";

// const cache = {};

export default function RecipeCarousel(props) {
  const selectedFood = props.randomFood;
  const [position, setPosition] = useState(0);

  //index to be passed to Overview component
  function updateIndex() {
    //gathering items
    const carouselItems = Array.from(
      document.getElementsByClassName("carousel-item")
    );

    //storing active item index
    let activeCarouselItem = carouselItems.findIndex((item) =>
      item.classList.contains("active")
    );

    //updating index
    if (activeCarouselItem !== -1) {
      setPosition(activeCarouselItem);
    }
  }

  return (
    <>
      <Col xs md={8} id="recipe-carousel-col">
        <Carousel
          interval={2500}
          fade={true}
          indicators={false}
          pause={"hover"}
          touch={"true"}
          onSlid={updateIndex}
        >
          {selectedFood &&
            selectedFood.map((food) => (
              <Carousel.Item key={food.id}>
                <img
                  id="carousel-item-img"
                  src={`${food.image}`}
                  alt={food.name}
                ></img>
                <Carousel.Caption>
                  <Link to={`mealtype/overview/${food.id}`}>
                    <h3 id="carousel-item-link">{food.name}</h3>
                  </Link>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
        </Carousel>
      </Col>
      <Col xs={4} id="desktop-ingredients-col">
        <Overview food={selectedFood} position={position} />
      </Col>
    </>
  );
}
