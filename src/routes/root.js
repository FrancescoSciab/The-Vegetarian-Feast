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
import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import SearchItems from './SearchBar';

const cache = {};
const client = axios.create({
    baseURL: "https://api.spoonacular.com",
  });

export default function Root() {
  const [randomFood, setRandomFood] = useState([])

    useEffect(() => {
        if (cache[`${randomFood}`]) {
            setRandomFood(cache[`${randomFood}`]);
            console.log(`in cache: ${randomFood}`)
        } else {
            client.get("/food/search?apiKey=8f5c95ab5ba54f428feb304dac547182&query=food&number=100")
            .then(response => {
            //handle success
            cache[`${randomFood}`] = response.data.searchResults[0].results;
            setRandomFood(response.data.searchResults[0].results)
            console.log(randomFood)
            })

      

            .catch(function(error) {
            // handle error
            console.log(error);
            })
            .finally(function() {
            // always executed 
            });
            }
        }, [])
  const mealTypes = ["main course", "side dish", "dessert", "appetizer", "salad", "bread", "breakfast", "soup", "beverage", "soup", "beverage", "sauce", "marinade", "fingerfood", "snack", "drink"]
  
return (
  <div className="root">
    <Container fluid>
      <Col>
        <Row id="navbar-row" style={{height: "10vh"}}>
          <NavbarComponent />
        </Row>
      
        <Row id="recipe-carousel-row">
          <RecipeCarousel randomFood={randomFood} />  
        </Row>

        <Row id="recipe-carousel-row" style={{height: "auto"}}>

            <Routes>
              <Route path='/' element={<MealItems client={client}/>} />

              <Route path=':searchbar' element={<SearchItems client={client} />}/>

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
  