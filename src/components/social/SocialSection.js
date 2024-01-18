import { TikTokEmbed } from "react-social-media-embed";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

export default function SocialMedia() {
  return (
    <Col md={8} id="tiktok-col">
      <Card id="tiktok-card">
        <Card.Body id="tiktok-card-body">
          <Card.Title id="tiktok-card-title">
            Looking for inspirations?
          </Card.Title>
          <TikTokEmbed
            url="https://www.tiktok.com/@freddsters/video/7218251101919776043?is_from_webapp=1&sender_device=pc&web_id=7288717368065787425"
            maxWidth={325}
          />
          <Card.Subtitle id="tiktok-card-subtitle">
            Check out the latest tiktoks
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </Col>
  );
}
