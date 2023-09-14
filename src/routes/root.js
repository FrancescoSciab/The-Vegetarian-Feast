import '../root.css';
import '../custom.scss';
import { useEffect, useState } from 'react'; 
import { Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import { Outlet } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from '../components/NavbarComponent';
import RecipeCarousel from '../components/RecipeCarousel';
import FoodMenu from '../components/FoodMenu';
import FoodItem from '../components/FoodItem';
import axios from 'axios';
import Lunch from './Dishes';

const cache = {};

export default function Root() {
    const text = "food";

    const baseUrl = "https://api.spoonacular.com";
    const apiKey = "?apiKey=8f5c95ab5ba54f428feb304dac547182"
    const type = "recipes/716429";
    const [topData, setTopData] = useState(null); //to be set to null
    
    
 //calling api and distributing data to components via props
 useEffect(() => {
  if (cache["topData"]) {
      setTopData(cache['topData']);
      console.log(topData)
  } else {
      axios.get(`${baseUrl}/${type}/${apiKey}&includeNutrition=false`)
      .then( response => {
      //handle success
      cache['topData'] = response.data;
      setTopData(response.data)
      
      })
      .catch(function(error) {
      // handle error
      console.log(error);
      })
      .finally(function() {
      // always executed 
      console.log(topData)
      }, []);
      }
  })



return (
  <div className="root">
    <Container id="navbar-container" fluid>
      <Col>
        <Row id="navbar-row">
          <NavbarComponent />
        </Row>
      
        <Row id="recipe-carousel-row">
          <RecipeCarousel />  
        </Row>

        <Row id="recipe-carousel-row">

            <Routes>
              <Route path='/' element={topData && <FoodItem id={topData.id}  dishTypes={topData.type}/>} />

              <Route path='lunch' element={<Lunch />} />
            </Routes>
          
        </Row>

        <Row id="recipe-carousel-row">
          <FoodMenu text={text} />
        </Row>
        
      </Col>

      <Col id="desktop-ingredients-col">
        <RecipeCarousel id="desktop-ingredients-carousel" />
      </Col>
    </Container>

    <div id="detail">
        <Outlet />
      </div>
  </div>
)}
  