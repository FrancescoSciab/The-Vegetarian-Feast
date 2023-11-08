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
import SearchItems from './SearchBar';


//called navbar component to not conflict with bootstrap navbar
export default function NavbarComponent() {
    const [searchActive, setSearchActive] = useState(false)

    function handleClick() {
        setSearchActive(!searchActive)
    }
    return (
        
        <Navbar style={
            {
                justifyContent: "space-between", 
                padding: "0 1rem", 
                margin: "16px 0"
            }
            }>
            
            {searchActive 
            ?
            <SearchItems />
            :
            <Navbar.Brand>The Vegetarian Feast</Navbar.Brand>}
            
            <Button id="search-icon" onClick={handleClick}>
                {searchActive 
                ?
                <span>&#10006;</span>
                :
                <Link to='/'>&#128269;</Link>
                }
            </Button>

        </Navbar>       
       
    )
}