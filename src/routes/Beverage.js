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
        client.get("/recipes/complexSearch?apiKey=8f5c95ab5ba54f428feb304dac547182&type=beverage")
        .then(response => {
        //handle success
        cache["beverages"] = response.data;
        setBeverages(response.data)
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
