import { Container, Row, Col } from "react-bootstrap";
import { BsPersonPlus } from "react-icons/bs";
const SecondLeftComponent = () => {
  return (
    <Container className="rounded-3 mt-2 bg-white py-3 px-3 border fontSize075">
      <p className="fw-semibold mb-2">Visualizza Tutte Le analisi</p>
      <Row className="align-items-center">
        <Col xs={9}>
          <p className="fw-semibold">Collegamenti</p>
          <p className="text-muted">Espandi la tua rete</p>
        </Col>
        <Col xs={3}>
          <BsPersonPlus />
        </Col>
      </Row>
    </Container>
  );
};

export default SecondLeftComponent;
