import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function RecipeCarousel() {
    return (
        
        <Carousel>
            <Carousel.Item>
                <Carousel.Caption>
                <div>
                    <h1>Ciao</h1>
                    <p>Qui andra' </p>
                    <p>la</p>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <h1>Ciao 2</h1>
            </Carousel.Item>
            <Carousel.Item>
            <h1>Ciao 3</h1>
            </Carousel.Item>
        </Carousel>
        
    )
}