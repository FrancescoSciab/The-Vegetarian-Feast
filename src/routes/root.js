import '../root.css';
import '../scss/custom.scss';
import { Outlet, Route, Routes, useLoaderData, useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from '../components/NavbarComponent';
import RecipeCarousel from '../components/RecipeCarousel';
import FoodMenu from '../components/FoodMenu';
import MealItems from './MealType';
import Meal from '../components/Meal';
import Ingredients from '../components/Ingredients';
import Overview from './Overview';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SearchItems from '../components/SearchBar';
import { TikTokEmbed } from 'react-social-media-embed';

const cache = {};
const client = axios.create({
    baseURL: "https://api.spoonacular.com",
  });

export default function Root() {

  const [randomFood, setRandomFood] = useState([]);
  

    useEffect(() => {
        if (cache[`${randomFood}`]) {
            setRandomFood(cache[`${randomFood}`]);
        } else {
            client.get("/food/search?apiKey=8f5c95ab5ba54f428feb304dac547182&query=food&number=100")
            .then(response => {
            //handle success
            cache[`${randomFood}`] = response.data.searchResults[0].results;
            setRandomFood(response.data.searchResults[0].results)
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
  const mealTypes = ["main course", "side dish", "dessert", "appetizer", "salad", "bread", "breakfast", "soup", "beverage", "soup", "beverage", "sauce", "marinade", "fingerfood", "snack", "drink"]
  
return (
  <div className="root">
    <Container fluid>
      
        <Row id="navbar-row" >
          <NavbarComponent />
        </Row>
      
        
          <Row style={{width: "100vw", marginBottom: "16px"}}>
                <Routes>
                  <Route path='*' element={<RecipeCarousel randomFood={randomFood}/>} />
                </Routes> 
          </Row>
          <Row>
            <Routes>
              <Route path="*" element={<MealItems client={client}/>} />
              {/* <Route path='/' element={<MealItems />} />

              {mealTypes.map((mealType) => (
                <>
                  <Route path={":mealType"} element={<Meal client={client} />} />
                    <Route path={":mealType/overview/:id"} element={<Ingredients client={client}/>} />
                </>
              ))} */}
              </Routes>
          
            </Row>
                

              {/* <Route path='beverage' element={<Beverage client={client}/>} />
              <Route path='beverage/overview/:id' element={<Ingredients />} />

              <Route path='dessert' element={<Dessert client={client}/>} /> */}

                 
              
            
          
          

        {/* <Row>
          <FoodMenu />
        </Row> */}
      

      
        
      {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
      <TikTokEmbed url="https://www.tiktok.com/@freddsters/video/7218251101919776043?is_from_webapp=1&sender_device=pc&web_id=7288717368065787425" width={325} />
      </div> */}
          
        

        
    </Container>

  </div>
)}
  