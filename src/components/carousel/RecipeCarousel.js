import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/esm/Col";
import { useEffect, useState } from "react";
import MealPlaceholder from "../navigation/meal-placeholder/MealPlaceholder";

const cache = {};

export default function RecipeCarousel(props) {
  const [randomFood, setRandomFood] = useState({
    loading: true,
    response: [],
    errorCode: null,
  });

  const fetchData = async () => {
    try {
      const response = await props.client.get(
        `/food/search?query=food&number=100`
      );
      const recipes = response.data.recipes;
      cache[JSON.stringify(recipes)] = recipes;

      setRandomFood({
        loading: false,
        response: recipes,
        errorCode: null,
      });
    } catch (error) {
      setRandomFood({
        loading: false,
        response: null,
        errorCode: error.request.status,
      });
    }
  };

  useEffect(() => {
    if (cache[JSON.stringify(randomFood.response)]) {
      setRandomFood({
        loading: false,
        response: cache[JSON.stringify(randomFood.response)],
        errorCode: null,
      });
    } else {
      fetchData();
    }
  }, [randomFood.response]);

  return (
    <>
      {randomFood.loading ? (
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
            {randomFood.response &&
              randomFood.response.map((food) => (
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
