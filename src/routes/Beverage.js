import axios from "axios";
import { useEffect, useState } from "react";


const cache = {};
const client = axios.create({
    baseURL: "https://api.spoonacular.com"
  });

export default function Beverage() {
    const [beverages, setBeverages] = useState([]);


    
    

  useEffect(() => {
    if (cache["beverages"]) {
        setBeverages(cache["beverages"]);
    } else {
        client.get("/food/search?apiKey=8f5c95ab5ba54f428feb304dac547182&type=food")
        .then(response => {
        //handle success
        cache["beverages"] = response.data.searchResults[0].results;
        setBeverages(response.data.searchResults[0].results)
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
        console.log(beverages)
    )
}
