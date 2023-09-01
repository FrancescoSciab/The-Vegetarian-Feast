import logo from './logo.svg';
import './App.css';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';
import RecipeCarousel from './components/RecipeCarousel';



function App() {
  return (
    <div className="App">
      <Container fluid>
        <Col>
          <Row id="navbar">
            <NavbarComponent />
          </Row>
          <Row id="recipe-carousel">
            <RecipeCarousel />  
          </Row>
          <Row id="recipe-carousel">
            <RecipeCarousel />
          </Row>
          <Row id="recipe-carousel">
            <RecipeCarousel />
          </Row>
          <Row id="recipe-carousel">
            <RecipeCarousel />
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default App;
