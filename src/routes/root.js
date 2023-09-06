import '../root.css';
import '../custom.scss';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from '../components/NavbarComponent';
import RecipeCarousel from '../components/RecipeCarousel';
import FoodMenu from '../components/FoodMenu';
import FoodItem from '../components/FoodItem';
import axios from 'axios';




export default function Root() {
    const text = "food";

    
    
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
                <FoodItem />
              </Row>

              <Row id="recipe-carousel-row">
                <FoodMenu text={text} />
              </Row>
              
            </Col>

            <Col id="desktop-ingredients-col">
              <RecipeCarousel id="desktop-ingredients-carousel" />
            </Col>
          </Container>
        </div>
  )}
  