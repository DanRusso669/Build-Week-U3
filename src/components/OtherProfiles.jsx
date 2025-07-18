import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const OtherProfiles = ({ profile, button, title }) => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center mx-auto mt-2">
          <Col xs={3}>
            <Image
              src={profile.image}
              alt="Profile"
              className="imgProfiles"
              roundedCircle
              onClick={() => {
                navigate(`/profilo/${profile._id}`);
              }}
            />
          </Col>
          <Col xs={9} className="mb-3">
            <span>
              <Link to={`/profilo/${profile._id}`} className="text-dark text-decoration-none fw-bold">
                {profile.name} {profile.surname}
              </Link>
            </span>
            {title === "Altri profili per te" && <span> • 3°+</span>}
            <p className="text-truncate">
              {profile.title}
              {profile.bio}
            </p>
            <Button variant="outline-secondary rounded-pill">
              <h5 className="d-inline"> + </h5>
              {button}
            </Button>
          </Col>
          <hr></hr>
        </Row>
      </Container>
    </>
  );
};
export default OtherProfiles;
