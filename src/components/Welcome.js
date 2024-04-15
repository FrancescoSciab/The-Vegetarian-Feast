import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Logo from "./navbar/Logo";

export default function Welcome() {
  return (
    <Row id="welcome-animation-row">
      <Col>
        <Logo />
      </Col>
    </Row>
  );
}
