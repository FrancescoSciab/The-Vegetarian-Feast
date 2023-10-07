import { useEffect, useState } from "react";
import { Form, useParams } from "react-router-dom";

const cache = {};

export default function SearchItems(props) {

    const { searchbar } = useParams()
    const [items, setItems] = useState([searchbar]);
    

  useEffect(() => {
    if (cache[`${items}`]) {
        setItems(cache[`${items}`]);
        
    } else {
        props.client.get(`/recipes/complexsearchbar?apiKey=8f5c95ab5ba54f428feb304dac547182&query=${searchbar}`)
        .then(response => {
        //handle success
        cache[`${items}`] = response.data;
        setItems(response.data)
        
        })
        .catch(function(error) {
        // handle error
        console.log(error);
        })
        .finally(function() {
        // always executed 
        });
        }
    }, [searchbar])
    return (
        <p>{console.log(`searchbarbar result: ${searchbar}`)}</p>
    )
}