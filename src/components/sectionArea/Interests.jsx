import { Container, Tabs, Tab, Row, Col, Image, Button } from "react-bootstrap";
const Interests = () => {
  return (
    <Container className="rounded-3 mt-2 bg-white p-4 border" style={{ fontSize: "0.875rem" }}>
      <h5>Interessi</h5>
      <Tabs defaultActiveKey="topvoices" id="interessi-tabs" className="custom-tabs mb-3">
        <Tab eventKey="topvoices" title="Top Voices">
          <Row className="g-4">
            <Col md={6}>
              <Row>
                <Col xs="auto">
                  <Image src="../src/assets/react.svg" roundedCircle alt="Simon Sinek" />
                </Col>
                <Col>
                  <h6 className="mb-0">Simon Sinek</h6>
                  <p className="mb-1 text-muted">
                    Optimist, New York Times bestselling author of "Start with Why" and "The Infinite Game", and founder of The Optimism Company
                  </p>
                  <p className="text-muted">8.569.454 follower</p>
                  <Button variant="outline-dark" size="sm" className="rounded-pill px-3">
                    + Segui
                  </Button>
                </Col>
              </Row>
            </Col>

            <div className="responsive-hr d-md-none w-100">
              <hr className="border my-2" />
            </div>

            <Col md={6}>
              <Row>
                <Col xs="auto">
                  <Image src="../src/assets/react.svg" roundedCircle alt="Chris Do" />
                </Col>
                <Col>
                  <h6 className="mb-0">Chris Do</h6>
                  <p className="mb-1 text-muted">
                    Learn how to get more clients, grow your influence and build your personal brand. Generate $20k/months—Go Pro, or Level Up w/ Bootcamp.
                  </p>
                  <p className="text-muted">588.323 follower</p>
                  <Button variant="outline-dark" size="sm" className="rounded-pill px-3">
                    + Segui
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Tab>

        <Tab eventKey="aziende" title="Aziende">
          <Row className="g-4">
            <Col md={6}>
              <Row>
                <Col xs="auto">
                  <Image src="../src/assets/react.svg" roundedCircle alt="Simon Sinek" />
                </Col>
                <Col>
                  <h6 className="mb-0">Adobe</h6>
                  <p className="text-muted">5.008.185 follower</p>
                  <Button variant="outline-dark" size="sm" className="rounded-pill px-3">
                    + Segui
                  </Button>
                </Col>
              </Row>
            </Col>
            <div className="responsive-hr d-md-none w-100">
              <hr className="border my-2" />
            </div>
            <Col md={6}>
              <Row>
                <Col xs="auto">
                  <Image src="../src/assets/react.svg" roundedCircle alt="Chris Do" />
                </Col>
                <Col>
                  <h6 className="mb-0">NABA</h6>
                  <p className="text-muted">75.249 follower</p>
                  <Button variant="outline-dark" size="sm" className="rounded-pill px-3">
                    + Segui
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="gruppi" title="Gruppi">
          <p>Sezione Gruppi</p>
        </Tab>
        <Tab eventKey="newsletter" title="Newsletter">
          <p>Sezione Newsletter</p>
        </Tab>
        <Tab eventKey="scuole" title="Scuole o università">
          <p>Sezione Scuole o università</p>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Interests;
