import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";

export default function MealPlaceholder(props) {
  const index = props.index;
  return (
    <>
      <Card key={`placeholder-${index}`}>
        <Placeholder id="placeholder-img-glow" as={Card.Text} animation="glow">
          <Placeholder id="placeholder-img" xs={6} />
        </Placeholder>
        <Card.Body id="placeholder-card-body">
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
            <Placeholder xs={6} /> <Placeholder xs={8} />
            <Placeholder.Button xs={6} />
          </Placeholder>
        </Card.Body>
      </Card>
    </>
  );
}
