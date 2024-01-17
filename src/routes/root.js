import "../root.css";
import "../scss/custom.scss";
import { Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "../components/navbar/NavbarComponent";
import RecipeCarousel from "../components/carousel/RecipeCarousel";
import MealItems from "../components/navigation/MealType";
import SocialSection from "../components/social/SocialSection";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../components/footer/footer";
import Col from "react-bootstrap/esm/Col";
import MealPlaceholder from "../components/navigation/meal-placeholder/MealPlaceholder";

const cache = {};
const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
const client = axios.create({
  baseURL: "https://api.spoonacular.com",
  params: {
    apiKey: apiKey,
  },
});

export default function Root() {
  const [randomFood, setRandomFood] = useState({
    loading: true,
    response: [],
    errorCode: null,
  });

  useEffect(() => {
    if (cache[randomFood.response]) {
      setRandomFood({
        loading: false,
        response: cache[randomFood.response],
        errorCode: null,
      });
    } else {
      client
        .get(`/food/search?query=food&number=100`)
        .then((response) => {
          //handle success
          cache[randomFood.response] = response.data.recipes;
          setRandomFood({
            loading: false,
            response: response.data.recipes,
            errorCode: null,
          });
        })
        .catch(function (error) {
          // the error is gonna be loaded below before rendering
          setRandomFood({
            loading: false,
            response: null,
            errorCode: error.request.status,
          });
        })
        .finally(function () {
          // always executed
        });
    }
  }, [randomFood.response]);

  return (
    <div className="root">
      <Container fluid>
        <Row id="navbar-row">
          <NavbarComponent />
        </Row>

        <Row>
          <Routes>
            <Route
              path="/"
              element={
                randomFood.loading ? (
                  <Col xs md={8}>
                    <MealPlaceholder />
                  </Col>
                ) : (
                  <RecipeCarousel randomFood={randomFood.response} />
                )
              }
            />
          </Routes>
        </Row>
        <Row>
          <Routes>
            <Route path="*" element={<MealItems client={client} />} />
          </Routes>
        </Row>

        <Row id="social-row">
          <SocialSection />
        </Row>

        <Row>
          <Footer />
        </Row>
      </Container>
    </div>
  );
}
