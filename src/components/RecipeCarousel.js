import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

const cache = {};

export default function RecipeCarousel(props) {

    const [randomFood, setRandomFood] = useState([])

    useEffect(() => {
        if (cache[`${randomFood}`]) {
            setRandomFood(cache[`${randomFood}`]);
            console.log(`in cache: ${randomFood}`)
        } else {
            props.client.get("/food/search?apiKey=8f5c95ab5ba54f428feb304dac547182&number=100&query=food")
            .then(response => {
            //handle success
            cache[`${randomFood}`] = response.data;
            setRandomFood(response.data)
            console.log(randomFood)
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
        
        <Carousel interval={null}>
            <Carousel.Item>
                </Carousel.Item>
        </Carousel>
        
    )
}