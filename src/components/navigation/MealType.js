import { Link, Route, Routes } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Meal from "./Meal";
import { Animate } from "react-simple-animate";
import Col from "react-bootstrap/esm/Col";
import Slider from "react-slick";

function MealItems(props) {
  const mealTypes = [
    "Main Course",
    "Side Dish",
    "Dessert",
    "Appetizer",
    "Salad",
    "Bread",
    "Breakfast",
    "Soup",
    "Beverage",
    "Sauce",
    "Marinade",
    "Fingerfood",
    "Snack",
    "Drink",
  ];

  //automatic behavior if slidesToShow is not set
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

  return (
    <>
      <Routes>
        <Route
          path="*"
          element={
            <Col md={8}>
              <Slider {...settings}>
                {mealTypes.map((mealType, index) => (
                  <Animate
                    play
                    key={mealType}
                    sequenceIndex={index}
                    start={{ opacity: 0, transform: "translateX(20px)" }}
                    end={{ opacity: 1, transform: "translateX(0)" }}
                  >
                    <Card id="react-slick-card">
                      <Card.Body id="card-body-react-slick">
                        <Card.Title>{mealType}</Card.Title>
                        <Card.Text>New {mealType} ideas</Card.Text>
                      </Card.Body>
                      <Card.Footer id="card-footer-react-slick">
                        <Button>
                          <Link to={mealType}>View recipes</Link>
                        </Button>
                      </Card.Footer>
                    </Card>
                  </Animate>
                ))}
              </Slider>
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
