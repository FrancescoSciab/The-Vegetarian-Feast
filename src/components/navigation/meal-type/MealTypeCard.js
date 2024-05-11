import Col from "react-bootstrap/esm/Col";
import { Animate } from "react-simple-animate";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function MealTypeCard(props) {
  const mealTypes = props.mealTypes;
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
                <Card.Text>Discover delicious recipes</Card.Text>
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
  );
}
