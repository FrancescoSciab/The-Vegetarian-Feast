import '../root.css';
import '../scss/custom.scss';
import { Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from '../components/navbar/NavbarComponent';
import RecipeCarousel from '../components/carousel/RecipeCarousel';
import MealItems from '../components/navigation/MealType';
import SocialSection from '../components/social/SocialSection'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Footer from '../components/footer/footer';


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
        }, [randomFood])
  
  
return (
  <div className="root">
    <Container fluid>
      
        <Row id="navbar-row" >
          <NavbarComponent />
        </Row>
      
          <Row style={{width: "100vw", marginBottom: "16px"}}>
                <Routes>
                  <Route path='/' element={<RecipeCarousel randomFood={randomFood}/>} />
                </Routes> 
          </Row>
          <Row>
            <Routes>
              <Route path="*" element={<MealItems client={client}/>} />  
            </Routes>
          </Row>

          <Row id="social-row">
            <SocialSection />
          </Row>

          <Row>
            <Footer />
          </Row>
        
    </Container>

  </div>
)}
  
