import { Container, Card, Button, Row, Col } from "react-bootstrap";

const ProfileCard = () => {
  const user = {
    name: "Mario",
    surname: "Rossi",
    email: "mario@rossi.it",
    username: "mario88",
    bio: "Freelance developer",
    title: "Full Stack Web Developer",
    area: "Milan",
    country: "Italy",
  };

  return (
    <Container className="p-0 mt-4">
      <Card className="border rounded-3">
        <div style={{ position: "relative" }}>
          <Card.Img
            src="https://i.imgur.com/bLQ1iTC.png"
            style={{
              height: "12rem",
              objectFit: "cover",
              width: "100%",
              borderRadius: 0,
            }}
          />

          <img
            src=""
            alt="Foto profilo"
            style={{
              width: "5rem",
              height: "5rem",
              borderRadius: "50%",
              border: "3px solid white",
              position: "absolute",
              bottom: "-2.5rem",
              left: "20px",
              objectFit: "cover",
            }}
          />
        </div>

        <Card.Body className="pt-5 px-4">
          <Row>
            <Col md={8} className="align-items-center">
              <h4 className="mb-1">
                {user.name} {user.surname}
              </h4>
              <p className="text-muted mb-1" style={{ fontSize: "1rem" }}>
                <span className="fw-semibold">{user.title}</span>
              </p>
              <p className="text-muted mb-1" style={{ fontSize: "1rem" }}>
                {user.area}, {user.country} ·{" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  Informazioni di contatto
                </a>
              </p>
              <p className="text-muted mb-2" style={{ fontSize: "1rem" }}>
                <span className="fw-semibold">Piu di 500 </span>
                collegamenti
              </p>

              <div className="d-flex gap-2 flex-wrap">
                <Button variant="primary" size="sm" className="rounded-pill">
                  Collegati
                </Button>
                <Button
                  variant="outline-primary"
                  size="sm"
                  className="rounded-pill"
                >
                  Messaggio
                </Button>
                <Button
                  variant="outline-secondary"
                  size="sm"
                  className="rounded-pill"
                >
                  Altro
                </Button>
              </div>
            </Col>

            <Col
              md={4}
              className="align-items-center d-block d-md-none d-lg-block"
            >
              <Card className="mb-2">
                <div className="d-flex">
                  <img
                    src=""
                    alt="foto"
                    className="me-3"
                    style={{
                      width: "3rem",
                      height: "3rem",
                      objectFit: "cover",
                      borderRadius: "0.25rem",
                    }}
                  />

                  <div>
                    <p className="fw-semibold" style={{ fontSize: "0.9rem" }}>
                      Senior Developer
                    </p>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProfileCard;
