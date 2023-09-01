import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import '../custom.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

//called navbar component to not conflict with bootstrap navbar
export default function NavbarComponent() {
    return (
        <Container fluid> 
            <Row>
                <Col>
                    <Nav.Link>
                        <Navbar.Brand >Vegetarian Recipe Website</Navbar.Brand>
                    </Nav.Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="outline-success" >&#128269;</Button>
                </Col>
            </Row>
        </Container>
    )
}