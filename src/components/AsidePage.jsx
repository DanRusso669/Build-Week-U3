import { Button, Col, Container, Image, Row } from "react-bootstrap";
import ButtonShowAll from "./ButtonShowAll";

const AsidePage = () => {
  return (
    <>
      <div className="bg-light rounded p-3 mt-4">
        <h3 className="text-dark">Potrebbe interessarti</h3>
        <p>Pagine per te</p>
        <Container className="rounded-bottom-0 border-bottom-0 border">
          <Row className="d-flex justify-content-center mx-auto my-2">
            <Col xs={3}>
              <Image
                src="data:image/png;base64,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"
                alt="Agency"
                className="imgProfiles"
                roundedCircle
              />
            </Col>
            <Col xs={9}>
              <span>
                <a className="text-dark text-decoration-none fw-bold" href="#">
                  Engineering Group
                </a>
              </span>

              <p>Servizi IT e consulenza IT</p>
              <p className="text-secondary"> 182.485 follower</p>
              <Button variant="outline-secondary rounded-pill">
                <h5 className="d-inline"> + </h5>
                Segui
              </Button>
              <hr></hr>
            </Col>
            <Col xs={3}>
              <Image
                src="data:image/png;base64,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"
                alt="Agency"
                className="imgProfiles"
                roundedCircle
              />
            </Col>
            <Col xs={9}>
              <span>
                <a className="text-dark text-decoration-none fw-bold" href="#">
                  WeRoad
                </a>
              </span>

              <p>Tempo libero,viaggi e turismo</p>
              <p className="text-secondary"> 97.149 follower</p>
              <Button variant="outline-secondary rounded-pill">
                <h5 className="d-inline"> + </h5>
                Segui
              </Button>
              <hr></hr>
            </Col>
          </Row>
        </Container>
      </div>
      <ButtonShowAll />
    </>
  );
};
export default AsidePage;
