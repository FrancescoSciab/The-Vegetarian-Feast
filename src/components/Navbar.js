import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import '../custom.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
    return (
        <Container fluid> 
            <Nav.Link>
                <Navbar.Brand >Vegetarian Recipe Website</Navbar.Brand>
            </Nav.Link>
            <Button variant="outline-success" >&#128269;</Button>
        </Container>
    )
}