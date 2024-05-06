import { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Ingredients from "./Ingredients";
import { Animate } from "react-simple-animate";
import ErrorPage from "../../error-page";
import Row from "react-bootstrap/Row";
import MealCards from "./meal-cards/MealCard";
import MealPlaceholder from "./meal-placeholder/MealPlaceholder";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/esm/Col";

const cache = {};

export default function Meal(props) {
  const { mealType } = useParams();
  const [meals, setMeals] = useState({
    loading: true,
    response: [],
    errorCode: null,
  }); //when location changes the api call will betriggered
  const [itemsNumber, setItemsNumber] = useState(10);
  function getMealType() {
    const params = {
      tags: "vegetarian",
      type: mealType,
      titleMatch: mealType,
      sort: "popularity",
      sortDirection: "disc",
      number: itemsNumber,
    };

    if (cache[(mealType, itemsNumber)]) {
      setMeals({
        loading: false,
        response: cache[mealType],
        errorCode: null,
      });
    } else {
      props.client
        .get(
          "/recipes/complexSearch",
          { params }
          ///recipes/complexSearch?query=${cleanedQueryString}&titleMatch=${cleanedQueryString}
          //, { params })
        )
        .then((response) => {
          //handle success

          cache[mealType] = response.data.results;
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
  }
  function getMoreItems() {
    setItemsNumber((prevItemsNumber) => prevItemsNumber + 10);
  }
  useEffect(() => {
    getMealType();
  }, [mealType, itemsNumber]);

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
            <>
              <Row xs={1} md={2} lg={3} className="g-4">
                {meals.response.length ? (
                  meals.response.map((meal, index) => (
                    <>
                      <Animate
                        play
                        key={meal.id}
                        sequenceIndex={index}
                        start={{ opacity: 0, transform: "translateY(20px)" }}
                        end={{ opacity: 1, transform: "translateY(0)" }}
                      >
                        <MealCards meal={meal} />
                      </Animate>
                    </>
                  ))
                ) : (
                  <>
                    <h5>
                      No results found. I hope you're not looking for meat.. 😒
                    </h5>
                  </>
                )}
              </Row>
              <Row>
                <Col md={8}>
                  <Button onClick={getMoreItems}>
                    {meals.loading ? "Loading..." : "Load More"}
                  </Button>
                </Col>
              </Row>
            </>
          }
        />

        <Route
          path="/overview/:id"
          element={<Ingredients client={props.client} mealType={mealType} />}
        />
      </Routes>
    </>
  );
}
