import { Container, Row, Col } from "react-bootstrap";
import { BsBookmarkFill, BsPeopleFill, BsNewspaper, BsCalendar } from "react-icons/bs";

const FourthLeftComponent = () => {
  return (
    <Container className="rounded-3 mt-2 bg-white py-2 px-4 border fontSize075">
      <Row className="align-items-center justify-content-start fw-semibold mt-1 mb-2 ">
        <Col xs={2}>
          <BsBookmarkFill />
        </Col>
        <Col xs={10}>
          <p className="mb-0">Elementi Salvati</p>
        </Col>
      </Row>

      <Row className="align-items-center fw-semibold my-2">
        <Col xs={2}>
          <BsPeopleFill />
        </Col>
        <Col xs={10}>
          <p className="mb-0">Gruppi</p>
        </Col>
      </Row>

      <Row className="align-items-center fw-semibold my-2">
        <Col xs={2}>
          <BsNewspaper />
        </Col>
        <Col xs={10}>
          <p className="mb-0">NewsLetter</p>
        </Col>
      </Row>

      <Row className="align-items-center fw-semibold mb-1 mt-2">
        <Col xs={2}>
          <BsCalendar />
        </Col>
        <Col xs={10}>
          <p className="mb-0">Eventi</p>
        </Col>
      </Row>
    </Container>
  );
};

export default FourthLeftComponent;
