import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import Ingredients from "./Ingredients";
import { Animate } from "react-simple-animate";
import ErrorPage from "../../error-page";
import Row from "react-bootstrap/Row";
import MealCards from "./meal-cards/MealCard";
import MealPlaceholder from "./meal-placeholder/MealPlaceholder";

const cache = {};

export default function Meal(props) {
  const { mealType } = useParams();
  const location = useLocation();
  console.log(location);

  const tags = ["vegetarian", mealType];
  const [meals, setMeals] = useState({
    loading: true,
    response: [],
    errorCode: null,
  }); //when location changes the api call will be triggered

  useEffect(() => {
    const params = {
      "include-tags": tags.join(","),
      number: 100,
    };

    if (cache[location.search]) {
      setMeals({
        loading: false,
        response: cache[location.search],
        errorCode: null,
      });
    } else {
      props.client
        .get(
          `/recipes/complexSearch?&titleMatch=${location.search}`
          ///recipes/complexSearch?query=${location.search}&titleMatch=${location.search}
          //, { params })
        )
        .then((response) => {
          //handle success
          console.log(response);
          cache[location.search] = response.data.results;
          setMeals({
            loading: false,
            response: response.data.results,
            errorCode: null,
          });
        })
        .catch((error) => {
          // the error is gonna be loaded below before rendering
          setMeals({
            loading: false,
            response: null,
            errorCode: error.request.status,
          });
        })
        .finally(function () {
          // always executed
        });
    }
  }, [location.search]);

  if (meals.errorCode) {
    console.log(meals.errorCode);
    return <ErrorPage errorStatus={meals.errorCode} />;
  }

  if (meals.loading) {
    return (
      <Row xs={1} md={2} className="g-4">
        <MealPlaceholder />
      </Row>
    );
  }

  return (
    <>
      <Routes>
        <Route
          path="*"
          element={
            <Row xs={1} md={2} lg={3} className="g-4">
              {meals.response.length ? (
                meals.response.map((meal, index) => (
                  <Animate
                    play
                    key={meal}
                    sequenceIndex={index}
                    start={{ opacity: 0, transform: "translateY(20px)" }}
                    end={{ opacity: 1, transform: "translateY(0)" }}
                  >
                    <MealCards meal={meal} />
                  </Animate>
                ))
              ) : (
                <h5>
                  No results found. I hope you're not looking for meat.. 😒
                </h5>
              )}
            </Row>
          }
        />

        <Route
          path="/overview/:id"
          element={
            <Ingredients client={props.client} mealType={location.search} />
          }
        />
      </Routes>
    </>
  );
}
