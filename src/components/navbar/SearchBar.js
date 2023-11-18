import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



export default function SearchItems(props) {

    const [items, setItems] = useState([]);
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleChange = event => {
        setQuery(event.target.value); 
    }

    //no need to cache
    useEffect(() => {
        navigate(query); 
}, [query])
    
    
    return (
        <>
            <Form style={{width: "100%", marginRight: "16px"}}>
                <Form.Group>
                    <Form.Label>Type your search query</Form.Label>
                    <Form.Control 
                        type="search" 
                        placeholder="Search" 
                        controlid="header-search"
                        name="s"
                        value={query}
                        onChange={handleChange}
                    />
                </Form.Group>
            </Form>
        </>
        
    )
}

