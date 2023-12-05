import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Animate } from "react-simple-animate";


const cache = {}

export default function SimilarRecipes(props) {

    const id = props.id;
    const [similarRecipes, setSimilarRecipes] = useState({
      loading: true,
      response: [],
      errorCode: null
    });

    useEffect(() => {
        if (cache[id]) {
            setSimilarRecipes({
              loading: false,
              response: cache[id],
              errorCode: null
            });
        } else {
            props.client.get(`/recipes/${id}/similar?apiKey=8f5c95ab5ba54f428feb304dac547182&number=100`)
            .then(response => {
            //handle success
            cache[id] = response.data;
            setSimilarRecipes({
              loading: false,
              response: response.data,
              errorCode: null
            })
            })
            .catch(function(error) {
              // the error is gonna be loaded below before rendering
              setSimilarRecipes({
                loading: false,
                response: null,
                errorCode: error.request.status
              })
            })
            .finally(function() {
            // always executed 
            });
            }
        }, [id, props.client])
    return(
<>

<CardGroup id="similar-recipes-card-group">
{similarRecipes.response.map((similarRecipe) => (
<Animate play 
    start={{ opacity: 0 }} 
    end={{ opacity: 1 }} 
    duration={0.75}>
    <Card id="card-meal" key={similarRecipe.id} style={{
      flex: "0 0 auto", 
      margin: "0 16px 8px 0"
      }}>
    <Card.Img variant="top" src={similarRecipe.img} 
    style={
      {
        borderTopLeftRadius: "0.75rem",
        borderTopRightRadius: "0.75rem"}} />
    <Card.Body 
    style={
      {
        
        borderBottomLeftRadius: "0.75rem",
        borderBottomRightRadius: "0.75rem"}}>
      <Card.Title>{similarRecipe.title}</Card.Title>
      <Card.Subtitle>
      <div id="recipe-card-info-container">
                <span id="recipe-card-info-span">
                &#x1F550; {similarRecipe.readyInMinutes}
                  <span>Minutes</span> 
                </span>

                <span id="recipe-card-info-span">
                &#x1F464; {similarRecipe.servings}
                  <span>Servings</span> 
                </span>

      </div>
        
        </Card.Subtitle>
      <Card.Text>
      </Card.Text>
      <Button variant="primary" ><Link to={`/${props.mealType}/overview/${similarRecipe.id}`} replace>View Recipe</Link></Button>
    </Card.Body>
  </Card> 
</Animate>
))}
</CardGroup>
</>
    )
}