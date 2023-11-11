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
                carouselInfo.length > 0 && (
                
                <CardGroup style={{margin: "0", overflow: "scroll"}}>
                    <Card style={{height: "40vh"}}>
                    <Card.Body  id='overview_card' style={{borderRadius: "0.75rem"}}>
                    <Card.Title>{carouselInfo[position].name}</Card.Title>
                    <Card.Subtitle><p dangerouslySetInnerHTML={{ __html: (DOMPurify.sanitize(carouselInfo[position].content))}} /></Card.Subtitle>
                    </Card.Body>
                </Card>
            </CardGroup>
            )}
            
        </>
    )
}