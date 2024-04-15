import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Logo from "./navbar/Logo";
import Container from "react-bootstrap/esm/Container";

export default function Welcome() {
  return (
    <Container className="mx-auto my-auto">
      <Row>
        <Col xs={8} md={4} lg={3}>
          <Logo />
        </Col>
      </Row>
    </Container>
  );
}
