import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

//called navbar component to not conflict with bootstrap navbar
export default function NavbarComponent() {
    return (
        
        <Navbar style={{"justifyContent": "space-between", padding: "0 1rem"}}>
            
            <Navbar.Brand href='#'>The Vegetarian Feast</Navbar.Brand>
        
            <Button variant="outline-success" >&#128269;</Button>
        </Navbar>       
       
    )
}