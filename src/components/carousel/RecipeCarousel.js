import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import MealPlaceholder from "../navigation/meal-placeholder/MealPlaceholder";
import ErrorPage from "../../error-page";

export default function RecipeCarousel(props) {
  const randomFood = props.randomFood;

  if (randomFood.errorCode) {
    console.log(randomFood.errorCode);
    return <ErrorPage errorStatus={randomFood.errorCode} />;
  }

  if (randomFood.loading) {
    return (
      <Row xs={1} md={2} className="g-4">
        <MealPlaceholder />
      </Row>
    );
  }
  return (
    <Row>
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
              <Carousel.Item key={food.id}>
                <Link to={`mealtype/overview/${food.id}`}>
                  <Card.Img
                    src={`${food.image}`}
                    alt={food.title}
                    id="carousel-item-img"
                  />
                  <Card.ImgOverlay>
                    <Card.Title id="carousel-title">{food.title}</Card.Title>
                  </Card.ImgOverlay>
                </Link>
              </Carousel.Item>
            ))}
        </Carousel>
      </Col>
    </Row>
  );
}
