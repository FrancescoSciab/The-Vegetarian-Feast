import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/Card';
//sanitizing summary html below
import DOMPurify from 'dompurify';

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
        
        <>
    <CardGroup>
            <Card key={mealsInfo.id}>
            <Card.Img variant="top" src={mealsInfo.image} />
            <Card.Body>
              <Card.Title>{mealsInfo.title}</Card.Title>
              <Card.Text>
                
              <p dangerouslySetInnerHTML={{ __html: (DOMPurify.sanitize(mealsInfo.summary)) }} />
              </Card.Text>
            </Card.Body>
          </Card> 
    </CardGroup>
    </>
    )
}