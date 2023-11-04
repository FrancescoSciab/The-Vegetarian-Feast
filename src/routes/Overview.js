import DOMPurify from 'dompurify';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';

export default function Overview(props) {
    
    const carouselInfo = props.randomFoodDetails;
    return (
        <>
            <CardGroup>
                {carouselInfo.map((info) => (
                    <Card>
                    <Card.Body>
                    <Card.Title>{info.name}</Card.Title>
                    <Card.Subtitle><p dangerouslySetInnerHTML={{ __html: (DOMPurify.sanitize(info.content))}} /></Card.Subtitle>
                    </Card.Body>
                </Card>
                ))}
            </CardGroup>
        </>
    )
}