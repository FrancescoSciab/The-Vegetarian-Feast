import '../root.css';
import '../custom.scss';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from '../components/NavbarComponent';
import RecipeCarousel from '../components/RecipeCarousel';
import axios from 'axios';




export default function Root() {

    axios.get('https://api.spoonacular.com/recipes/716429/informat')
    .then( response => {
    // handle success
    console.log(response.data.title);
    })
    .catch(function (error) {
    // handle error
    console.log(error);
    })
    .finally(function () {
    // always executed
    });
    
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
                
              </Row>
              <Row id="recipe-carousel-row">
                
              </Row>
              <Row id="recipe-carousel-row">
                
              </Row>
              <Row id="recipe-carousel-row">
                <RecipeCarousel />
              </Row>
              
            </Col>
            <Col id="desktop-ingredients-col">
              <RecipeCarousel id="desktop-ingredients-carousel" />
            </Col>
          </Container>
        </div>
      );
  }
  