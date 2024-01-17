import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/Card";
//sanitizing summary html below
import DOMPurify from "dompurify";
import SimilarRecipes from "./SimilarRecipes";
import { Animate } from "react-simple-animate";
import ErrorPage from "../../error-page";
import Placeholder from "react-bootstrap/Placeholder";
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

  return (
    <>
      {mealsInfo.errorCode ? (
        <ErrorPage errorStatus={mealsInfo.response.errorCode} />
      ) : null}

      {mealsInfo.loading ? (
        <Col xs md={8}>
          <MealPlaceholder />
        </Col>
      ) : (
        <Col xs md={8}>
          <CardGroup id="card-group-ingredients">
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
                  <Card.Subtitle>
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
                  <Card.Text>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(mealsInfo.response.summary),
                      }}
                    />

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
      )}
      <Row>
        <Col xs md={8}>
          <Card.Subtitle id="similar-recipes-subtitle">
            Similar recipes you might like:
          </Card.Subtitle>
        </Col>
      </Row>

      <SimilarRecipes id={id} client={props.client} mealType={props.mealType} />
    </>
  );
}
