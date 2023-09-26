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
import FoodItem from '../components/FoodItem';
import Lunch from './Dishes';
import Beverage from './Beverage';
import Dessert from './Dessert';
import Ingredients from './Overview';
import axios from 'axios';

const cache = {};
const client = axios.create({
    baseURL: "https://api.spoonacular.com"
  });

export default function Root() {

  
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
              <Route path='/' element={<FoodItem />} />

              <Route path='lunch' element={<Lunch client={client} />} />
                <Route path='lunch/overview/:id' element={<Ingredients />} />

              <Route path='beverage' element={<Beverage client={client}/>} />
              <Route path='beverage/overview/:id' element={<Ingredients />} />

              <Route path='dessert' element={<Dessert client={client}/>} />

                <Route path="dessert/overview/:id" element={<Ingredients />} /> 
              
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
  