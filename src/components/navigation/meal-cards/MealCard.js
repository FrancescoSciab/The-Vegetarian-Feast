import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

export default function MealCards(props) {
  const meal = props.meal;
  return (
    <Card id="card-meal" key={meal.id}>
      <Card.Img id="card-img-meal" variant="top" src={meal.image} />
      <Card.Body id="card-body-meal">
        <Card.Title>{meal.title}</Card.Title>
        <Card.Subtitle>
          <Row>
            <Col>&#x1F550; {meal.readyInMinutes} Minutes</Col>
            <Col>&#x1F464; {meal.servings} Servings</Col>
            <Col>&#129382; {meal.healthScore} HealthScore</Col>
          </Row>
          {/* <div id="recipe-card-info-container">
            <span id="recipe-card-info-span">
              &#x1F550; {meal.readyInMinutes}
              <span>Minutes</span>
            </span>

            <span id="recipe-card-info-span">
              &#x1F464; {meal.servings}
              <span>Servings</span>
            </span>

            <span id="recipe-card-info-span">
              &#129382; {meal.healthScore}
              <span>HealthScore</span>
            </span>
          </div> */}
        </Card.Subtitle>
        <Card.Text></Card.Text>
        <Button variant="primary">
          <Link to={`overview/${meal.id}`}>View Recipe</Link>
        </Button>
      </Card.Body>
    </Card>
  );
}
