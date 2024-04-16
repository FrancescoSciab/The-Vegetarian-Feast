import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/Card";
//sanitizing summary html below
import DOMPurify from "dompurify";
import SimilarRecipes from "./SimilarRecipes";
import Container from "react-bootstrap/esm/Container";
import { Animate } from "react-simple-animate";
import ErrorPage from "../../error-page";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import MealPlaceholder from "./meal-placeholder/MealPlaceholder";

const cache = {};

export default function Ingredients(props) {
  const { id } = useParams();
  const [mealsInfo, setMealsInfo] = useState({
    loading: true,
    response: [],
    errorCode: null,
  });

  useEffect(() => {
    if (cache[id]) {
      setMealsInfo({
        loading: false,
        response: cache[id],
        errorCode: null,
      });
    } else {
      props.client
        .get(`/recipes/${id}/information?number=100`)
        .then((response) => {
          //handle success
          cache[id] = response.data;
          setMealsInfo({
            loading: false,
            response: response.data,
            errorCode: null,
          });
        })
        .catch(function (error) {
          // the error is gonna be loaded below before rendering
          setMealsInfo({
            loading: false,
            response: null,
            errorCode: error.request.status,
          });
        })
        .finally(function () {
          // always executed
        });
    }
  }, [id, props.client]);

  if (mealsInfo.errorCode) {
    console.log(mealsInfo.errorCode);
    return <ErrorPage errorStatus={mealsInfo.errorCode} />;
  }

  if (mealsInfo.loading) {
    return (
      <Row>
        <Col xs md={8}>
          <MealPlaceholder />
        </Col>
      </Row>
    );
  }

  return (
    <Container fluid>
      <Row>
        <Col xs md={8}>
          <CardGroup>
            <Animate
              play
              start={{ opacity: 0 }}
              end={{ opacity: 1 }}
              duration={0.75}
            >
              <Card key={mealsInfo.response.id}>
                <Card.Img variant="top" src={mealsInfo.response.image} />
                <Card.Body>
                  <Card.Title>{mealsInfo.response.title}</Card.Title>
                  <Card.Subtitle className="p-4">
                    <Row>
                      <Col>
                        &#x1F550; {mealsInfo.response.cookingMinutes} Minutes
                      </Col>
                      <Col>
                        &#129382; {mealsInfo.response.healthScore} HealthScore
                      </Col>
                      <Col>&#x1F464; {mealsInfo.response.servings} Serving</Col>
                    </Row>
                  </Card.Subtitle>
                  <Card.Subtitle className="p-2">Summary:</Card.Subtitle>
                  <Card.Text className="p-2">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(mealsInfo.response.summary),
                      }}
                    />
                    <Card.Subtitle className="p-2">Instructions:</Card.Subtitle>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          mealsInfo.response.instructions
                        ),
                      }}
                    />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Animate>
          </CardGroup>
        </Col>
      </Row>

      <Row>
        <Col xs md={8}>
          <Card.Subtitle>Similar recipes you might like:</Card.Subtitle>
        </Col>
      </Row>

      <Row>
        <SimilarRecipes
          id={id}
          client={props.client}
          mealType={props.mealType}
        />
      </Row>
    </Container>
  );
}
