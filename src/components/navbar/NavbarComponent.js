import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import SearchItems from './SearchBar';
import { Link } from 'react-router-dom';


//called navbar component to not conflict with bootstrap navbar
export default function NavbarComponent(props) {

    const client = props.client;
    const [searchActive, setSearchActive] = useState(false)


    function handleClick() {
        setSearchActive(!searchActive)
    }
    return (
        
        <Navbar>
            
            {searchActive 
            ?
            <SearchItems client={client} />
            :
            <Navbar.Brand>The Vegetarian Feast</Navbar.Brand>
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
       
    )
}