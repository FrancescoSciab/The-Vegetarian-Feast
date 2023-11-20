import { TikTokEmbed } from 'react-social-media-embed';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/Card';

export default function SocialMedia() {
    return(

        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CardGroup>
              <Card>
                <Card.Body>
                <Card.Title>Looking for inspirations?</Card.Title>
                  <TikTokEmbed 
                    url="https://www.tiktok.com/@freddsters/video/7218251101919776043?is_from_webapp=1&sender_device=pc&web_id=7288717368065787425"   
                    width={325}
                    height={"20vh"}    
                  />
                  <Card.Subtitle>Check out the latest tiktoks</Card.Subtitle>
                </Card.Body>
              </Card>
            </CardGroup>
        </div>
    )
}