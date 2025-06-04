import { Container, Tab, Tabs, Row, Col, Image } from "react-bootstrap";

const References = () => {
  return (
    <>
      <Container className="rounded-3 mt-2 bg-white p-4 border" style={{ fontSize: "0.875rem" }}>
        <h5>Referenze</h5>
        <Tabs defaultActiveKey="ricevute" id="referenze-tabs" className="custom-tabs mb-3">
          <Tab eventKey="ricevute" title="Ricevute">
            <Row>
              <Col xs="auto">
                <Image src="../src/assets/react.svg" roundedCircle alt="Foto profilo" />
              </Col>
              <Col>
                <h6 className="mb-0">Ubeyt Demir</h6>
                <p className="mb-1 text-muted">Head of Technology@EPICODE</p>
                <p className="text-muted mb-2" style={{ fontSize: "0.875rem" }}>
                  14 marzo 2023, Ubeyt ha avuto Stefano come superiore, ma non come manager diretto
                </p>
                <p className="mb-2">
                  I highly recommend Stefano Miceli as a Senior Frontend Developer and UI/UX expert. Stefano is not only exceptionally skilled but also a great
                  teacher.
                </p>
                <p className="mb-0">
                  During my time learning from him, I was continually impressed by his ability to explain complex concepts in a way that was easy to understand.
                  He is also super dedicated to creating the best user experiences, and his friendly and approachable personality make him a pleasure to work
                  with.
                </p>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="scritte" title="Scritte">
            <Row>
              <Col xs="auto">
                <Image src="../src/assets/react.svg" roundedCircle alt="Foto profilo" />
              </Col>
              <Col>
                <h6 className="mb-0">Ubeyt Demir</h6>
                <p className="mb-1 text-muted">Head of Technology@EPICODE</p>
                <p className="text-muted mb-2" style={{ fontSize: "0.875rem" }}>
                  14 marzo 2023, Ubeyt ha avuto Stefano come superiore, ma non come manager diretto
                </p>
                <p className="mb-2">
                  I highly recommend Stefano Miceli as a Senior Frontend Developer and UI/UX expert. Stefano is not only exceptionally skilled but also a great
                  teacher.
                </p>
                <p className="mb-0">
                  During my time learning from him, I was continually impressed by his ability to explain complex concepts in a way that was easy to understand.
                  He is also super dedicated to creating the best user experiences, and his friendly and approachable personality make him a pleasure to work
                  with.
                </p>
              </Col>
            </Row>
            <hr className="border" />
            <Row>
              <Col xs="auto">
                <Image src="../src/assets/react.svg" roundedCircle alt="Foto profilo" />
              </Col>
              <Col>
                <h6 className="mb-0">Ubeyt Demir</h6>
                <p className="mb-1 text-muted">Head of Technology@EPICODE</p>
                <p className="text-muted mb-2" style={{ fontSize: "0.875rem" }}>
                  14 marzo 2023, Ubeyt ha avuto Stefano come superiore, ma non come manager diretto
                </p>
                <p className="mb-2">
                  I highly recommend Stefano Miceli as a Senior Frontend Developer and UI/UX expert. Stefano is not only exceptionally skilled but also a great
                  teacher.
                </p>
                <p className="mb-0">
                  During my time learning from him, I was continually impressed by his ability to explain complex concepts in a way that was easy to understand.
                  He is also super dedicated to creating the best user experiences, and his friendly and approachable personality make him a pleasure to work
                  with.
                </p>
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
};
export default References;
