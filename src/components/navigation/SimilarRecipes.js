import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Animate } from "react-simple-animate";
import Slider from "react-slick";

const cache = {};

export default function SimilarRecipes(props) {
  const id = props.id;

  const settings = {
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    slidesToScroll: 2,
    variableWidth: true,
    adaptiveHeight: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToScroll: 1,
          infinite: true,
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
    <>
      <CardGroup id="similar-recipes-card-group">
        <Slider {...settings}>
          {similarRecipes.response.map((similarRecipe, index) => (
            <Animate
              play
              start={{ opacity: 0 }}
              sequenceIndex={index}
              end={{ opacity: 1 }}
              duration={0.75}
            >
              <Card id="card-meal" key={similarRecipe.id}>
                <Card.Body style={{ borderRadius: "0.75rem" }}>
                  <Card.Title>{similarRecipe.title}</Card.Title>
                  <Card.Subtitle>
                    <div id="recipe-card-info-container">
                      <span id="recipe-card-info-span">
                        &#x1F550; {similarRecipe.readyInMinutes}
                        <span>Minutes</span>
                      </span>

                      <span id="recipe-card-info-span">
                        &#x1F464; {similarRecipe.servings}
                        <span>Servings</span>
                      </span>
                    </div>
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
      </CardGroup>
    </>
  );
}
