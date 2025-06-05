import { Container, Row, Col } from "react-bootstrap";

const SecondRightCard = () => {
  return (
    <Container className="rounded-3 mt-2 bg-white p-2 border py-3 fontSize">
      <Row className="align-items-center gx-2">
        <Col
          xs="auto"
          className="fw-semibold rounded px-1 py-1 text-nowrap ms-1"
          style={{
            backgroundColor: "rgb(252, 227, 188)",
            color: "#4c3b4d",
            fontSize: "0.7rem",
          }}
        >
          SUGGERIMENTO
        </Col>
        <Col className="ms-2">
          <p
            className="text-muted"
            style={{
              fontWeight: "500",
              fontSize: "0.9rem",
              lineHeight: "1.3",
            }}
          >
            Prova LinkedIn sull’app <br />
            per il tuo dispositivo
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default SecondRightCard;
