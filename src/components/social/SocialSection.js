import { TikTokEmbed } from 'react-social-media-embed';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/Card';

export default function SocialMedia() {
    return(

          <Col md={8} id="tiktok-col" style={{display: "flex", justifyContent: "center"}}>
            
              <Card id="tiktok-card" style={{width: "100%"}}>
                <Card.Body style={{width: "100%"}}>
                <Card.Title>Looking for inspirations?</Card.Title>
                    <TikTokEmbed 
                      url="https://www.tiktok.com/@freddsters/video/7218251101919776043?is_from_webapp=1&sender_device=pc&web_id=7288717368065787425"   
                      width={325}
                      height={"20vh"}    
                    />
                  <Card.Subtitle>Check out the latest tiktoks</Card.Subtitle>
                </Card.Body>
              </Card>
            
          </Col>
    )
}