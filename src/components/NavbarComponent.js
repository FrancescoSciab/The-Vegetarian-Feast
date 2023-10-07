import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import  Form  from 'react-bootstrap/Form';


//called navbar component to not conflict with bootstrap navbar
export default function NavbarComponent() {
    const [searchActive, setSearchActive] = useState(false)
    return (
        
        <Navbar style={{"justifyContent": "space-between", padding: "0 1rem"}}>
            
            <Navbar.Brand href='#'>The Vegetarian Feast</Navbar.Brand>
        
            
            {
                searchActive ?
                <Form>
                <Form.Control placeholder="search"/>
            </Form>
            : 
            <Button variant="outline-success" onClick={() => setSearchActive(!searchActive)}>{searchActive ? <Link to='searchbar'>&#10005;</Link> : <Link to='searchbar'>&#128269;</Link>}</Button>
            }
        </Navbar>       
       
    )
}