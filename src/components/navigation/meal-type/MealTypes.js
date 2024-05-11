import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Meal from "../Meal";
import MealTypeCard from "./MealTypeCard";

function MealTypes(props) {
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

  return (
    <>
      <Routes>
        <Route path="*" element={<MealTypeCard mealTypes={mealTypes} />} />

        <Route
          path=":mealType/*"
          element={<Meal client={props.client} mealTypes={mealTypes} />}
        />
      </Routes>
    </>
  );
}

export default MealTypes;
