import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/Card';
//sanitizing summary html below
import DOMPurify from 'dompurify';
import SimilarRecipes from "./SimilarRecipes";
import { Animate } from "react-simple-animate";

const cache = {};


export default function Ingredients(props) {

    const { id } = useParams();
    const [mealsInfo, setMealsInfo] = useState([id]);//when mealtype changes the api call will be triggered
    

  useEffect(() => {
    if (cache[`${mealsInfo}`]) {
        setMealsInfo(cache[`${mealsInfo}`]);
    } else {
        props.client.get(`/recipes/${id}/information?apiKey=8f5c95ab5ba54f428feb304dac547182&number=100`)
        .then(response => {
        //handle success
        cache[`${mealsInfo}`] = response.data;
        setMealsInfo(response.data)
        
        })
        .catch(function(error) {
        // handle error
        console.log(error);
        })
        .finally(function() {
        // always executed 
        });
        }
    }, [id, mealsInfo, props.client])

    

    return (
         
        
        <>
        <Animate play 
                      start={{ opacity: 0 }} 
                      end={{ opacity: 1 }} 
                      duration={0.75}>
    <CardGroup> 
            <Card key={mealsInfo.id}>
            <Card.Img variant="top" src={mealsInfo.image} />
            <Card.Body>
              <Card.Title>{mealsInfo.title}</Card.Title>
              <Card.Subtitle>
                
                <div id="recipe-card-info-container">
                <span id="recipe-card-info-span">
                &#x1F550; {mealsInfo.cookingMinutes}
                  <span>Minutes</span> 
                </span>
                 
                <span id="recipe-card-info-span">
                &#129382; {mealsInfo.healthScore}
                  <span>HealthScore</span>
                </span>  
                
                <span id="recipe-card-info-span">
                &#x1F464; {mealsInfo.servings}
                  <span>Serving</span>
                  </span>
                </div>

              </Card.Subtitle>
              <Card.Text>
                
              <p dangerouslySetInnerHTML={{ __html: (DOMPurify.sanitize(mealsInfo.summary)) }} />

              <p dangerouslySetInnerHTML={{ __html: (DOMPurify.sanitize(mealsInfo.instructions))}} />
              </Card.Text>

              
            </Card.Body>
          </Card> 
    </CardGroup>

      <Card.Subtitle>Similar recipes you might like:</Card.Subtitle>

      <SimilarRecipes 
      id={id} 
      client={props.client}
      mealType={props.mealType}
       />
       </Animate>
    </>
    )
}