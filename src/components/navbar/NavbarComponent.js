import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import SearchItems from './SearchBar';


//called navbar component to not conflict with bootstrap navbar
export default function NavbarComponent(props) {

    const client = props.client;
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
            <SearchItems client={client} />
            :
            <Navbar.Brand>The Vegetarian Feast</Navbar.Brand>
            }
            
            
            
            <Button id="search-icon" onClick={handleClick}>
                
                {searchActive
                ?
                <span>&#10006;</span>
                :
                <span>&#128269;</span>
            }
                 
            </Button>

        </Navbar>       
       
    )
}