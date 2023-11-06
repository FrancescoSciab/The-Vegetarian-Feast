import DOMPurify from 'dompurify';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';

export default function Overview(props) {
    
    const carouselInfo = props.food;
    const position = props.position
        
    return (
        <>
            {
                carouselInfo.length > 0 && position >= 0 && position < carouselInfo.length && (
                
                <CardGroup>
                    <Card>
                    <Card.Body>
                    <Card.Title>{carouselInfo[position].name}</Card.Title>
                    {/* <Card.Subtitle><p dangerouslySetInnerHTML={{ __html: (DOMPurify.sanitize(carouselInfo[position].content))}} /></Card.Subtitle> */}
                    </Card.Body>
                </Card>
            </CardGroup>
            )}
            
        </>
    )
}