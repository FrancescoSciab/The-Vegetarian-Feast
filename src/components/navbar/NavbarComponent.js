import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import SearchItems from './SearchBar';
import { Link } from 'react-router-dom';
import { Animate, AnimateGroup } from "react-simple-animate";



//called navbar component to not conflict with bootstrap navbar
export default function NavbarComponent(props) {

    const client = props.client;
    const [searchActive, setSearchActive] = useState(false)


    function handleClick() {
        setSearchActive(!searchActive)
    }
    return (
        <AnimateGroup>
        <Navbar>
            
            {searchActive 
            ?
            <Animate play start={{ opacity: 0 }} end={{ opacity: 1 }}>
                <SearchItems client={client} />
            </Animate>

            :
            
            <Animate play start={{ opacity: 0 }} end={{ opacity: 1 }} duration={0.75}>
                <Navbar.Brand>The Vegetarian Feast</Navbar.Brand>
            </Animate>
                
            
            
            }
            
            
            
            <Button id="search-icon" onClick={handleClick}>
                
                {searchActive
                ?
                <span><Link to="/">&#10006;</Link></span>
                :
                <span>&#128269;</span>
            }
                 
            </Button>

        </Navbar> 
        </AnimateGroup>      
       
    )
}