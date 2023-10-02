import '../root.css';
import '../custom.scss';
import { Outlet, Route, Routes, useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from '../components/NavbarComponent';
import RecipeCarousel from '../components/RecipeCarousel';
import FoodMenu from '../components/FoodMenu';
import MealItems from '../components/MealType';
import Meal from './Meal';
import Ingredients from './Overview';
import axios from 'axios';

const cache = {};
const client = axios.create({
    baseURL: "https://api.spoonacular.com",
  });

export default function Root() {
  const mealTypes = ["main course", "side dish", "dessert", "appetizer", "salad", "bread", "breakfast", "soup", "beverage", "soup", "beverage", "sauce", "marinade", "fingerfood", "snack", "drink"]
  
return (
  <div className="root">
    <Container fluid>
      <Col>
        <Row id="navbar-row" style={{height: "10vh"}}>
          <NavbarComponent />
        </Row>
      
        <Row id="recipe-carousel-row">
          <RecipeCarousel />  
        </Row>

        <Row id="recipe-carousel-row" style={{height: "auto"}}>

            <Routes>
              <Route path='/' element={<MealItems client={client}/>} />

              {mealTypes.map((mealType) => (
                <>
                  <Route path={":mealType"} element={<Meal client={client} />} />
                    <Route path={":mealType/overview/:id"} element={<Ingredients client={client}/>} />
                </>
              ))}
              
                

              {/* <Route path='beverage' element={<Beverage client={client}/>} />
              <Route path='beverage/overview/:id' element={<Ingredients />} />

              <Route path='dessert' element={<Dessert client={client}/>} /> */}

                 
              
            </Routes>
          
        </Row>

        <Row id="recipe-carousel-row">
          <FoodMenu />
        </Row>
        
        
      </Col>

      <Col id="desktop-ingredients-col">
        <RecipeCarousel id="desktop-ingredients-carousel" />
      </Col>
    </Container>

  </div>
)}
  