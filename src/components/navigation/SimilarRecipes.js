import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Slider from "react-slick";
import LinesEllipsis from "react-lines-ellipsis";
import MealPlaceholder from "./meal-placeholder/MealPlaceholder";
import ErrorPage from "../../error-page";

const cache = {};

export default function SimilarRecipes(props) {
  const id = props.id;

  const settings = {
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 1,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1190,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2,
          arrows: false,
        },
      },
    ],
  };

  const [similarRecipes, setSimilarRecipes] = useState({
    loading: true,
    response: [],
    errorCode: null,
  });

  useEffect(() => {
    if (cache[id]) {
      setSimilarRecipes({
        loading: false,
        response: cache[id],
        errorCode: null,
      });
    } else {
      props.client
        .get(`/recipes/${id}/similar?number=100`)
        .then((response) => {
          //handle success
          cache[id] = response.data;
          setSimilarRecipes({
            loading: false,
            response: response.data,
            errorCode: null,
          });
        })
        .catch(function (error) {
          // the error is gonna be loaded below before rendering
          setSimilarRecipes({
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

  if (similarRecipes.errorCode) {
    console.log(similarRecipes.errorCode);
    return <ErrorPage errorStatus={similarRecipes.errorCode} />;
  }

  if (similarRecipes.loading) {
    return (
      <Row>
        <Col xs md={8}>
          <MealPlaceholder />
        </Col>
      </Row>
    );
  }
  return (
    <Col xs md={8}>
      <Slider {...settings}>
        {similarRecipes.response.map((similarRecipe) => (
          <Card id="card-similar-recipe">
            <Card.Body>
              <Card.Title>
                <LinesEllipsis
                  text={similarRecipe.title}
                  maxLine="2"
                  ellipsis="..."
                  trimRight
                  basedOn="letters"
                />
              </Card.Title>

              <Card.Subtitle id="similar-recipe-subtitle">
                <Row>
                  <Col>&#x1F550; {similarRecipe.readyInMinutes} Minutes</Col>
                  <Col>&#x1F464; {similarRecipe.servings} Servings</Col>
                </Row>
              </Card.Subtitle>
            </Card.Body>
            <Card.Footer>
              <Button>
                <Link
                  to={`/${props.mealType}/overview/${similarRecipe.id}`}
                  replace
                >
                  View Recipe
                </Link>
              </Button>
            </Card.Footer>
          </Card>
        ))}
      </Slider>
    </Col>
  );
}
