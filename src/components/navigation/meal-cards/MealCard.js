import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

export default function MealCards(props) {
  const meal = props.meal;
  return (
    <Card id="card-meal" key={meal.id}>
      <Card.Img id="card-img-meal" variant="top" src={meal.image} />
      <Card.Body id="card-body-meal">
        <Card.Title>{meal.title}</Card.Title>
        <Card.Subtitle>
          <div id="recipe-card-info-container">
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
          </div>
        </Card.Subtitle>
        <Card.Text></Card.Text>
        <Button variant="primary">
          <Link to={`overview/${meal.id}`}>View Recipe</Link>
        </Button>
      </Card.Body>
    </Card>
  );
}
