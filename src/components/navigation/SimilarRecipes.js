import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Slider from "react-slick";

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
  return (
    <Col xs md={8}>
      <Slider {...settings}>
        {similarRecipes.response.map((similarRecipe) => (
          <Card id="similar-recipe-card">
            <Card.Body id="card-body-react-slick">
              <Row>
                <Col>
                  <Card.Title>{similarRecipe.title}</Card.Title>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card.Subtitle id="similar-recipe-subtitle">
                    <Row>
                      <Col>
                        &#x1F550; {similarRecipe.readyInMinutes} Minutes
                      </Col>
                      <Col>&#x1F464; {similarRecipe.servings} Servings</Col>
                    </Row>
                  </Card.Subtitle>
                  <Row>
                    <Col>
                      <Button>
                        <Link
                          to={`/${props.mealType}/overview/${similarRecipe.id}`}
                          replace
                        >
                          View Recipe
                        </Link>
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </Slider>

      {/* <CardGroup id="similar-recipes-card-group">
        <Slider {...settings}>
          {similarRecipes.response.map((similarRecipe, index) => (
            <Animate
              play
              start={{ opacity: 0 }}
              sequenceIndex={index}
              end={{ opacity: 1 }}
              duration={0.75}
            >
              <Card key={similarRecipe.id}>
                <Card.Body style={{ borderRadius: "0.75rem" }}>
                  <Card.Title>{similarRecipe.title}</Card.Title>
                  <Card.Subtitle>
                    <Row>
                      <Col>
                        &#x1F550; {similarRecipe.readyInMinutes} Minutes
                      </Col>
                      <Col>&#x1F464; {similarRecipe.servings} Servings</Col>
                    </Row>
                  </Card.Subtitle>
                  <Card.Text></Card.Text>
                  <Button variant="primary">
                    <Link
                      to={`/${props.mealType}/overview/${similarRecipe.id}`}
                      replace
                    >
                      View Recipe
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Animate>
          ))}
        </Slider>
      </CardGroup> */}
    </Col>
  );
}
