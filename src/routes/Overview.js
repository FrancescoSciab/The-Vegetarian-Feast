import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const cache = {};

export default function Ingredients(props) {

    const { id } = useParams();
    const [mealsInfo, setMealsInfo] = useState([id]);//when mealtype changes the api call will be triggered
    console.log(`before useEffect: ${mealsInfo}`)

  useEffect(() => {
    if (cache[`${mealsInfo}`]) {
        setMealsInfo(cache[`${mealsInfo}`]);
        console.log(`in cache: ${mealsInfo}`)
    } else {
        props.client.get(`/recipes/${id}/information?apiKey=8f5c95ab5ba54f428feb304dac547182&number=100`)
        .then(response => {
        //handle success
        cache[`${mealsInfo}`] = response.data;
        setMealsInfo(response.data)
        console.log(mealsInfo)
        })
        .catch(function(error) {
        // handle error
        console.log(error);
        })
        .finally(function() {
        // always executed 
        });
        }
    }, [id])

    return (
        <p>Result: {id}</p>
    )
}