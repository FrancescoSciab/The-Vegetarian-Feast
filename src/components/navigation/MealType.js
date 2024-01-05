import { Link, Route, Routes } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Meal from "./Meal";
import { Animate } from "react-simple-animate";
import Col from "react-bootstrap/esm/Col";
import Slider from "react-slick";

function MealItems(props) {
  const mealTypes = [
    "main course 🥘",
    "side dish 🍛",
    "dessert 🍰",
    "appetizer 🥪",
    "salad 🥗",
    "bread 🥖",
    "breakfast 🥛",
    "soup 🍜",
    "beverage 🍹",
    "sauce 🍯",
    "marinade 🍲",
    "fingerfood 🍟",
    "snack 🍿",
    "drink 🍸",
  ];

  //automatic behavior if slidesToShow is not set
  const settings = {
    infinite: false,
    speed: 500,
    swipeToSlide: true,
    variableWidth: true,
    adaptiveHeight: true,
    arrows: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          infinite: true,
        },
      },
    ],
  };

  return (
    <>
      <Routes>
        <Route
          path="*"
          element={
            <Col id="navigation-col" md={8}>
              <CardGroup id="card-group-meal">
                <Slider {...settings}>
                  {mealTypes.map((mealType, index) => (
                    <Animate
                      play
                      key={mealType}
                      sequenceIndex={index}
                      start={{ opacity: 0, transform: "translateX(20px)" }}
                      end={{ opacity: 1, transform: "translateX(0)" }}
                    >
                      <Card id="card-meal">
                        <Card.Img variant="top" />
                        <Card.Body id="card-body-mealtype">
                          <Card.Title>{mealType}</Card.Title>
                          <Card.Text>New {mealType} ideas</Card.Text>
                          <Button>
                            <Link to={mealType}>{mealType} recipes</Link>
                          </Button>
                        </Card.Body>
                      </Card>
                    </Animate>
                  ))}
                </Slider>
              </CardGroup>
            </Col>
          }
        />

        <Route
          path=":mealType/*"
          element={<Meal client={props.client} mealTypes={mealTypes} />}
        />
      </Routes>
    </>
  );
}

export default MealItems;
