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
                    href="https://www.linkedin.com/in/francesco-sciabbarrasi-94231a212/">Linkedin<i class="fa fa-linkedin-square" style={{fontSize: "1rem", padding: "0.25rem"}}></i></Card.Link>
                <Card.Link 
                    id="footer-link" 
                    target="_blank"
                    href="https://github.com/FrancescoSciab">GitHub<i class="fa fa-github" style={{fontSize: "1rem", padding: "0.25rem"}}></i></Card.Link>
                <Card.Link id="footer-link" href="#">Email<i class="fa fa-envelope" style={{fontSize: "1rem", padding: "0.25rem"}}></i></Card.Link>
            </Col>

            <Col id="footer-col">
            <Card.Link id="footer-link" href="#">Logo</Card.Link>
            </Col>
      </Card.Footer>
    )
}