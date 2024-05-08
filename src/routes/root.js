import "../root.css";
import "../scss/custom.scss";
import { Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "../components/navbar/NavbarComponent";
import Welcome from "../../src/components/Welcome";
import RecipeCarousel from "../components/carousel/RecipeCarousel";
import MealItems from "../components/navigation/MealType";
import SocialSection from "../components/social/SocialSection";
import axios from "axios";
import Footer from "../components/footer/footer";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cache = {};
const apiKey = process.env.SPOONACULAR_API_KEY;
console.log(apiKey);
const client = axios.create({
  baseURL: "https://api.spoonacular.com",
  params: {
    apiKey: "ca591456037f421f8af87df0ccdb2894",
  },
});

export default function Root() {
  const [randomFood, setRandomFood] = useState({
    loading: true,
    response: [],
    errorCode: null,
  });
  //
  const [welcomeAnimationFinished, setWelcomeAnimationFinished] =
    useState(false);

  useEffect(() => {
    if (cache[`${randomFood}`]) {
      setRandomFood({
        loading: false,
        response: cache[`${randomFood}`],
        errorCode: null,
      });
    } else {
      client
        .get(`/recipes/complexSearch?diet=vegetarian&number=100`)
        .then((response) => {
          //handle success
          cache[`${randomFood}`] = response.data.results;
          setRandomFood({
            loading: false,
            response: response.data.results,
            errorCode: null,
          });
        })
        .catch(function (error) {
          // handle error
          console.log(error);
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
    // eslint-disable-next-line
  }, [randomFood.response]);

  //welcome animation
  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setWelcomeAnimationFinished(true);
    }, 2000);

    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <div className="root">
      <Container fluid>
        {welcomeAnimationFinished ? (
          <>
            <Row id="navbar-row">
              <NavbarComponent />
            </Row>

            {/**<Row> is in RecipeCarousel */}
            <Routes>
              <Route
                path="/"
                element={<RecipeCarousel randomFood={randomFood} />}
              />
            </Routes>

            <Row>
              <Routes>
                <Route
                  exact
                  path="/*"
                  element={<MealItems client={client} />}
                />
              </Routes>
            </Row>

            <Row id="social-row">
              <SocialSection />
            </Row>

            <Row>
              <Footer />
            </Row>
          </>
        ) : (
          <Welcome />
        )}
      </Container>
    </div>
  );
}
