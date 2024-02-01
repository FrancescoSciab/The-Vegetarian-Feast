import DOMPurify from "dompurify";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/Card";
import { Animate } from "react-simple-animate";

export default function Overview(props) {
  const carouselInfo = props.food;
  const position = props.position;

  return (
    <>
      {carouselInfo.length > 0 && (
        <Animate
          play
          start={{ opacity: 0, filter: "blur(10px)" }}
          end={{ opacity: 1, filter: "blur(0)" }}
        >
          <CardGroup>
            <Card>
              <Card.Body id="overview_card" style={{ borderRadius: "0.75rem" }}>
                <Card.Title>{carouselInfo[position].name}</Card.Title>
                <Card.Subtitle>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        carouselInfo[position].content
                      ),
                    }}
                  />
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </CardGroup>
        </Animate>
      )}
    </>
  );
}
