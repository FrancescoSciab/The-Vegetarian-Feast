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
import Footer from "../components/footer/footer";
import { useEffect, useState } from "react";

const cache = {};
const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
const client = axios.create({
  baseURL: "https://api.spoonacular.com",
  params: {
    apiKey: apiKey,
  },
});

export default function Root() {
  const [randomFood, setRandomFood] = useState([]);

  useEffect(() => {
    if (cache[`${randomFood}`]) {
      setRandomFood(cache[`${randomFood}`]);
    } else {
      client
        .get("/food/search?query=food&number=100")
        .then((response) => {
          //handle success
          cache[`${randomFood}`] = response.data.searchResults[0].results;
          setRandomFood(response.data.searchResults[0].results);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }
  }, [randomFood]);
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
              element={<RecipeCarousel randomFood={randomFood} />}
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
