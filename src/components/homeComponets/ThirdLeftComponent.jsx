import { Container, Row, Col } from "react-bootstrap";

const ThirdLeftComponent = () => {
  return (
    <Container className="rounded-3 mt-2 bg-white py-2 px-3 border" style={{ fontSize: "0.75rem" }}>
      <p lassName="text-muted mb-1">Accedi a strumenti e informazioni in esclusiva</p>
      <Row className="align-items-center">
        <Col xs={2}>
          <div
            style={{
              width: "0.9rem",
              height: "0.9rem",
              background: "linear-gradient(45deg, #c17817 50%, #e0a243 50%)",
              borderRadius: "4px",
            }}
          ></div>
        </Col>
        <Col xs={10}>
          <p className="fw-semibold">Prova Premium per 0 EUR</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ThirdLeftComponent;
