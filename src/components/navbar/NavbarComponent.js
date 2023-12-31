import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import SearchItems from './SearchBar';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { Animate, AnimateKeyframes } from "react-simple-animate";






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
                <Animate play
                start={{ opacity: 0, filter: 'blur(10px)' }}
                end={{ opacity: 1, filter: 'blur(0)' }}>
                    <SearchItems client={client} />
                </Animate>
            :
                <Nav>
                    
                    <Navbar.Brand>
                    
                        <Link to="/" style={{display: "flex"}}>
                        <AnimateKeyframes play
                            iterationCount="infinite"
                            direction="alternate"
                            duration={5}
                            keyframes={[
                              'transform: rotateX(0) rotateY(0) rotateZ(0)',
                              'transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg)',
                            ]}>
                            <span 
                            class="material-symbols-outlined">egg_alt</span>
                            </AnimateKeyframes>
                            <Animate play
                                    start={{ opacity: 0, filter: 'blur(10px)' }}
                                    end={{ opacity: 1, filter: 'blur(0)' }}>
                                The Vegetarian Feast
                            </Animate>
                            
                            
                            
                        </Link>
                        
                    </Navbar.Brand>
                
                </Nav>
                
            
            }
            
            
            
            <Button id="search-icon" onClick={handleClick}>
            
                {searchActive
                ?
                
                    <span>
                        <Link to="/">
                                <span class="material-symbols-outlined">close</span>
                        </Link>
                </span>
                
                :
                
                    <span class="material-symbols-outlined">search</span>
                
            }
            
                 
            </Button>

        </Navbar> 
        
       
    )
}