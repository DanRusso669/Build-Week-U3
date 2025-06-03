import { Col, Container, Row } from "react-bootstrap";
import OtherProfiles from "./OtherProfiles";

const Aside = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col className="col-8">Prova</Col>
          <Col className="col-4">
            <h3 className="text-dark">Altri profili per te</h3>
            <OtherProfiles />
            <OtherProfiles />
            <OtherProfiles />
            <OtherProfiles />
            <OtherProfiles />
            <OtherProfiles />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Aside;
