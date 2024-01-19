import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/esm/Col";
import { useEffect, useState } from "react";
import MealPlaceholder from "../navigation/meal-placeholder/MealPlaceholder";
import ErrorPage from "../../error-page";

export default function RecipeCarousel(props) {
  const randomFood = props.randomFood;
  return (
    <>
      {!randomFood ? (
        <Col xs md={8}>
          <MealPlaceholder />
        </Col>
      ) : (
        <Col xs md={8} id="recipe-carousel-col">
          <Carousel
            interval={2500}
            fade={true}
            indicators={false}
            pause={"hover"}
            touch={"true"}
            // onSlid={updateIndex}
          >
            {randomFood &&
              randomFood.map((food, index) => (
                <Carousel.Item>
                  <Link to={`mealtype/overview/${food.id}`}>
                    <Card.Img
                      src={`${food.image}`}
                      alt={food.name}
                      id="carousel-item-img"
                    />
                    <Card.ImgOverlay>
                      <Card.Title id="carousel-title">{food.name}</Card.Title>
                    </Card.ImgOverlay>
                  </Link>
                </Carousel.Item>
              ))}
          </Carousel>
        </Col>
      )}
    </>
  );
}
