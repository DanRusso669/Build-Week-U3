import { Button, Col, Container, Image, Row } from "react-bootstrap";

const OtherProfiles = () => {
  return (
    <>
      <Container xs={3}>
        <Row className="d-flex justify-content-center mx-auto my-2">
          <Col xs={2}>
            <Image
              src="src\assets\download.png"
              alt="img profile"
              width={50}
              height={50}
              roundedCircle
            />
          </Col>
          <Col xs={10}>
            <span>
              <a className="text-dark text-decoration-none" href="#">
                Nome e Cognome
              </a>
            </span>
            <p className="text-truncate">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              tenetur aut natus eius et optio perspic
            </p>
            <Button variant="outline-secondary rounded-pill">
              <h5 className="d-inline"> + </h5>
              Segui
            </Button>
            <hr></hr>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default OtherProfiles;
