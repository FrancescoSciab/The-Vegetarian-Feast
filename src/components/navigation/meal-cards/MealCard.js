import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

export default function MealCards(props) {
  const meal = props.meal;
  return (
    <Card key={meal.id} id="card-meal">
      <Card.Img id="card-img-meal" variant="top" src={meal.image} />
      <Card.Body id="card-body-meal">
        <Card.Title>{meal.title}</Card.Title>
        <Card.Subtitle>
          <Row>
            <Col>&#x1F550; {meal.readyInMinutes} Minutes</Col>
            <Col>&#x1F464; {meal.servings} Servings</Col>
            <Col>&#129382; {meal.healthScore} HealthScore</Col>
          </Row>
        </Card.Subtitle>
      </Card.Body>
      <Card.Footer>
        <Button>
          <Link to={`overview/${meal.id}`}>View Recipe</Link>
        </Button>
      </Card.Footer>
    </Card>
  );
}
