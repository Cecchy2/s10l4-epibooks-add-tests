import { Col, Row } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

function Welcome() {
  return (
    <>
      <Row>
        <Col className="text-center">
          <h1>Benvenuti nel mio BookShoop</h1>

          <Alert variant={"dark"}>Tutti i Libri al 50%</Alert>
        </Col>
      </Row>
    </>
  );
}

export default Welcome;
