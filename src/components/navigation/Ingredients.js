import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/Card';
//sanitizing summary html below
import DOMPurify from 'dompurify';
import SimilarRecipes from "./SimilarRecipes";
import { Animate } from "react-simple-animate";
import ErrorPage from "../../error-page";
import Placeholder from 'react-bootstrap/Placeholder';

const cache = {};


export default function Ingredients(props) {

    const { id } = useParams();
    const [mealsInfo, setMealsInfo] = useState({
      loading: true,
      response: [],
      errorCode: null
    });
    

  useEffect(() => {
    if (cache[id]) {
        setMealsInfo({
          loading: false,
          response: cache[id],
          errorCode: null
        })
    } else {
        props.client.get(`/recipes/${id}/information?apiKey=8f5c95ab5ba54f428feb304dac547182&number=100`)
        .then(response => {
        //handle success
        cache[id] = response.data;
        setMealsInfo({
          loading: false,
          response: response.data,
          errorCode: null
          })
        })
        .catch(function(error) {
        // the error is gonna be loaded below before rendering
        setMealsInfo({
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

    

    return (
         
        
        <>
        {mealsInfo.errorCode ? <ErrorPage errorStatus={mealsInfo.response.errorCode}/> : null}

        {mealsInfo.loading
        ?
        <CardGroup id="card-group-placeholder">
        <Card id="placeholder-card">
          <Card.Body id="placeholder-card-body">
            <Placeholder as={Card.Title} animation="glow">
                  <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                  <Placeholder xs={6} /> <Placeholder xs={8} />
                  <Placeholder.Button variant="primary" xs={6} />
              </Placeholder>
          </Card.Body>
        </Card>
        </CardGroup>
        
          :
    <CardGroup id="card-group-ingredients"> 
    <Animate play 
            start={{ opacity: 0 }} 
            end={{ opacity: 1 }} 
            duration={0.75}>
            <Card key={mealsInfo.response.id}>
            <Card.Img variant="top" src={mealsInfo.response.image} />
            <Card.Body>
              <Card.Title>{mealsInfo.response.title}</Card.Title>
              <Card.Subtitle>
                
                <div id="recipe-card-info-container">
                <span id="recipe-card-info-span">
                &#x1F550; {mealsInfo.response.cookingMinutes}
                  <span>Minutes</span> 
                </span>
                 
                <span id="recipe-card-info-span">
                &#129382; {mealsInfo.response.healthScore}
                  <span>HealthScore</span>
                </span>  
                
                <span id="recipe-card-info-span">
                &#x1F464; {mealsInfo.response.servings}
                  <span>Serving</span>
                  </span>
                </div>

              </Card.Subtitle>
              <Card.Text>
                
              <p dangerouslySetInnerHTML={{ __html: (DOMPurify.sanitize(mealsInfo.response.summary)) }} />

              <p dangerouslySetInnerHTML={{ __html: (DOMPurify.sanitize(mealsInfo.response.instructions))}} />
              </Card.Text>

              
            </Card.Body>
          </Card> 
          </Animate>
    </CardGroup>}
  

      <Card.Subtitle id="similar-recipes-subtitle">Similar recipes you might like:</Card.Subtitle>

      <SimilarRecipes 
      id={id} 
      client={props.client}
      mealType={props.mealType}
       />
       
    </>
    )
}