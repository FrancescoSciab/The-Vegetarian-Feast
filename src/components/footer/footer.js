import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';


export default function Footer() {
    return (
        <Card.Footer>
            <Col id="footer-col">
                <Card.Link id="footer-link" href="#">Card Link</Card.Link>
                <Card.Link id="footer-link" href="#">Another Link</Card.Link>
            </Col>

            <Col id="footer-col">
            <Card.Link id="footer-link" href="#">Logo</Card.Link>
            </Col>
      </Card.Footer>
    )
}