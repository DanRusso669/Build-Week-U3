import { Button, Col, Container, Image, Row } from "react-bootstrap";

const OtherProfiles = ({ profile }) => {
  return (
    <>
      <Container xs={4}>
        <Row className="d-flex justify-content-center mx-auto my-2">
          <Col xs={3}>
            <Image
              src={profile.image}
              alt="Profile"
              width={50}
              height={50}
              roundedCircle
            />
          </Col>
          <Col xs={9}>
            <span>
              <a className="text-dark text-decoration-none" href="#">
                {profile.name}
                {profile.surname}
              </a>
            </span>
            <p className="text-truncate">
              {profile.title}
              {profile.bio}
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
