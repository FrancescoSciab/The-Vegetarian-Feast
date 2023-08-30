import logo from './logo.svg';
import './custom.scss';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Container fluid> 
        
        <Nav.Link>
          <Navbar.Brand >Vegetarian Recipe Website</Navbar.Brand>
        </Nav.Link>
        <Button variant="outline-success" >&#128269;</Button>
      </Container>
    </div>
  );
}

export default App;
