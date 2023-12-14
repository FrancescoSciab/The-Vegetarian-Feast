import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';


export default function Footer() {
    return (
        <Card.Footer>
            <Col id="footer-col">
                <Card.Title id="footer-title">Contacts</Card.Title>
                <Card.Link 
                    id="footer-link" 
                    target="_blank"
                    href="https://www.linkedin.com/in/francesco-sciabbarrasi-94231a212/">Linkedin</Card.Link>
                <Card.Link 
                    id="footer-link" 
                    target="_blank"
                    href="https://github.com/FrancescoSciab">GitHub</Card.Link>
                <Card.Link id="footer-link" href="#">Email</Card.Link>
            </Col>

            <Col id="footer-col">
            <Card.Link id="footer-link" href="#">Logo</Card.Link>
            </Col>
      </Card.Footer>
    )
}