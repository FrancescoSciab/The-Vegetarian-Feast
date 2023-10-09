import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import * as JsSearch from 'js-search';


const cache = {};


export default function SearchItems(props) {

    const [items, setItems] = useState([]);
    const [query, setQuery] = useState("")

    const handleChange = event => {
        setQuery(event.target.value);
        console.log('value is:', event.target.value);
    }
    
    
    useEffect(() => {
        if (cache[`${items}`]) {
            setItems(cache[`${items}`]);
        } else {
             props.client.get(`/recipes/complexSearch?apiKey=8f5c95ab5ba54f428feb304dac547182&query=${query}`)
            .then(response => {
            //handle success
            cache[`${items}`] = response.data.results[0].title;
            setItems(response.data.results[0].title)
            console.log(`api: ${items}`)
            })
            .catch(function(error) {
            // handle error
            console.log(error);
            })
            .finally(function() {
            // always executed 
            });
            }
    }, [])
    
    return (
        <>
            <Form>
            <Form.Group>
                <Form.Label>Type your search query</Form.Label>
                <Form.Control 
                    type="search" 
                    placeholder="search" 
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

