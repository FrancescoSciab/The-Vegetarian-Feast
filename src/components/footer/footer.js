import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/esm/Col";
import Logo from "../navbar/Logo";
import { EmailSection } from "./emailSection";
import Collapse from "react-bootstrap/Collapse";

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <Card.Footer>
      <Col id="footer-col">
        <Card.Title id="footer-title">Contacts</Card.Title>
        <Card.Link
          id="footer-link"
          target="_blank"
          href="https://www.linkedin.com/in/francesco-sciabbarrasi-94231a212/"
        >
          Linkedin
          <i
            class="fa fa-linkedin-square"
            style={{ fontSize: "1rem", padding: "0.25rem" }}
          ></i>
        </Card.Link>
        <Card.Link
          id="footer-link"
          target="_blank"
          href="https://github.com/FrancescoSciab"
        >
          GitHub
          <i
            class="fa fa-github"
            style={{ fontSize: "1rem", padding: "0.25rem" }}
          ></i>
        </Card.Link>

        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Write Email
          <i
            class="fa fa-envelope"
            style={{ fontSize: "1rem", padding: "0.25rem" }}
          ></i>
        </Button>

        <Collapse in={open}>
          {/**div necessary to make transition work */}
          <div>
            <EmailSection />
          </div>
        </Collapse>
      </Col>

      <Col id="footer-col">
        <Link id="footer-link" to="/" style={{ display: "flex" }}>
          <Logo />
        </Link>
      </Col>
    </Card.Footer>
  );
}
