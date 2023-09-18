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
import Beverage from './Beverage';

export default function Root() {

return (
  <div className="root">
    <Container id="navbar-container" fluid>
      <Col style={{"maxWidth": "100vw"}}>
        <Row id="navbar-row">
          <NavbarComponent />
        </Row>
      
        <Row id="recipe-carousel-row">
          <RecipeCarousel />  
        </Row>

        <Row id="recipe-carousel-row">

            <Routes>
              <Route path='/' element={<FoodItem />} />

              <Route path='lunch' element={<Lunch />} />

              <Route path='beverage' element={<Beverage />} />
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
  