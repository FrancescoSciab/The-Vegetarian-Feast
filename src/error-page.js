import Col from "react-bootstrap/esm/Col";

export default function ErrorPage(props) {
  const error = props.errorStatus;

  return (
    <Col md={8}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {error === 402
          ? "Reached API calls limit, payment required. You can still check out the latest tik tok recipes below."
          : "Error"}
      </p>
    </Col>
  );
}
