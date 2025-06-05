import { Container, Row, Col } from "react-bootstrap";
import { BsInfoSquareFill } from "react-icons/bs";

const FirstRightCard = () => {
  return (
    <Container className="rounded-3 mt-2 bg-white p-4 border" style={{ fontSize: "0.875rem" }}>
      <Row class="d-flex justify-content-between">
        <Col xs={10}>
          <h5>LinkeDIn Notizie</h5>
        </Col>
        <Col xs={2}>
          <BsInfoSquareFill />
        </Col>
      </Row>
      <p className="text-muted fw-semibold mt-2">Storie Principali</p>
      <p className="fw-semibold mt-2">Credem cerca nuovi bancari</p>
      <p className="text-muted " style={{ fontSize: "0.775rem" }}>
        5 ore fa · 245 lettori
      </p>
      <p className="fw-semibold mt-2">Voci Dal Pride Month</p>
      <p className="text-muted " style={{ fontSize: "0.775rem" }}>
        17 ore fa · 100 lettori
      </p>
      <p className="fw-semibold mt-2">La giornata mondiale dell 'ambiente</p>
      <p className="text-muted " style={{ fontSize: "0.775rem" }}>
        1 giorno fa · 170 lettori
      </p>
      <p className="fw-semibold mt-2">Dazi per acciaio e alluminio</p>
      <p className="text-muted " style={{ fontSize: "0.775rem" }}>
        10 ore fa · 50 lettori
      </p>
      <p className="fw-semibold mt-2">Multato un cartello del food delivery</p>
      <p className="text-muted " style={{ fontSize: "0.775rem" }}>
        10 ore fa · 50 lettori
      </p>
      <p className="fw-semibold mt-2">Occupazione stabile ad aprile</p>
      <p className="text-muted " style={{ fontSize: "0.775rem" }}>
        1 ore fa
      </p>
    </Container>
  );
};

export default FirstRightCard;
