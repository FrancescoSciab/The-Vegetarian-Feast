import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import * as JsSearch from 'js-search';


const cache = {};


export default function SearchItems(props) {

    const [items, setItems] = useState([]);
    const { searchs } = window.location;
    const query = new URLSearchParams(searchs).get('s');
    var search = new JsSearch.Search(`${query}`);
    search.addIndex('id')
    search.addDocuments(items)
    search.search(`${query}`)
    

  function search() {
    if (cache[`${items}`]) {
        setItems(cache[`${items}`]);
        
    } else {
        props.client.get(`/recipes/complexsearchbar?apiKey=8f5c95ab5ba54f428feb304dac547182&query=pasta`)
        .then(response => {
        //handle success
        cache[`${items}`] = response.data;
        setItems(response.data)
        console.log(items)
        
        })
        .catch(function(error) {
        // handle error
        console.log(error);
        })
        .finally(function() {
        // always executed 
        });
        }
    }
    return (
        <Form>
            <Form.Group>
                <Form.Label>Type your search query</Form.Label>
                <Form.Control 
                    type="search" 
                    placeholder="search" 
                    controlid="header-search"
                    name="s"
                    defaultValue={query}
                    onChange={search}
                />
            </Form.Group>
        </Form>
    )
}

export function Pippo() {
    return(
        <p>ciao</p>
    )
}

