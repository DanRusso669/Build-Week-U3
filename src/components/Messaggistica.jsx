import React from "react";
import { Container, Row, Col, Form, Button, Dropdown } from "react-bootstrap";
import "../App.css";

const Messaggistica = () => {
  return (
    <Container className="mt-3">
      <Row>
        {/* Contenitore centrale con bordo arrotondato */}
        <Col xs={12} md={9}>
          <div className="bg-white rounded border p-3" style={{ minHeight: "100vh" }}>
            {/* Sezione superiore */}
            <div className="mb-3">
              <Row className="align-items-center mb-3">
                <Col xs="auto">
                  <h6 className="mb-0">Messaggistica</h6>
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="Cerca messaggi" style={{ width: "100%" }} />
                </Col>
              </Row>
              <div className="d-flex flex-wrap mb-3">
                {/* Dropdown per Posta in arrivo */}
                <Dropdown className="me-2 mb-2">
                  <Dropdown.Toggle variant="success" className="rounded-pill py-1">
                    Posta in arrivo
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.4)" }}>
                    <Dropdown.Item href="#action1">Tutti i messaggi</Dropdown.Item>
                    <Dropdown.Item href="#action2">Non letti</Dropdown.Item>
                    <Dropdown.Item href="#action3">Importanti</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Button variant="light" className="btn btn-outline-secondary py-1 rounded-pill me-2 mb-2 hover-border">
                  Lavoro
                </Button>
                <Button variant="light" className="btn btn-outline-secondary py-1 rounded-pill me-2 mb-2 hover-border">
                  Da leggere
                </Button>
                <Button variant="light" className="btn btn-outline-secondary py-1 rounded-pill me-2 mb-2 hover-border">
                  I miei collegamenti
                </Button>
                {/* Dropdown per Tutti i filtri */}
                <Dropdown className="me-2 mb-2">
                  <Dropdown.Toggle variant="light" className="btn btn-outline-secondary py-1 rounded-pill hover-border">
                    Tutti i filtri
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.4)" }}>
                    <Dropdown.Item href="#filter1">Lavoro</Dropdown.Item>
                    <Dropdown.Item href="#filter2">Da leggere</Dropdown.Item>
                    <Dropdown.Item href="#filter3">I miei collegamenti</Dropdown.Item>
                    <Dropdown.Item href="#filter3">Messaggi InMail</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>

            {/* Contenuto principale */}
            {/* Sidebar sinistra */}
            <Col className="d-flex flex-row ">
              <div className="col-5 border-1 border-end ">
                <Row className="border-start border-3 border-success align-items-center mb-3">
                  <Col xs="auto">
                    <img src="src/assets/download.png" alt="Profile" className="rounded-circle" style={{ width: 60 }} />
                  </Col>
                  <Col>
                    <strong>Kristen J.</strong>
                    <svg style={{ width: "14px", height: "14px" }} className="ms-2">
                      <image href="https://static.licdn.com/aero-v1/sc/h/7lputkpzv6s224ks0n6c7h2qo" x="0" y="0" width="14" height="14"></image>
                    </svg>
                    <Row>
                      <p className="text-muted mb-0 fw-medium">
                        Offerta di LinkedIn <span style={{ fontWeight: 400 }}>Ciao</span>
                      </p>
                      <span style={{ fontWeight: 400 }}>Mario, ecco un...</span>
                    </Row>
                  </Col>
                </Row>
              </div>
              <div className="col-7 ps-2">
                <div className="border-bottom pb-3 mb-3">
                  <strong>Kristen J.</strong>
                  <svg style={{ width: "14px", height: "14px" }} className="ms-2">
                    <image href="https://static.licdn.com/aero-v1/sc/h/7lputkpzv6s224ks0n6c7h2qo" x="0" y="0" width="14" height="14"></image>
                  </svg>
                  <p className="text-muted mb-0" style={{ textWrap: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontSize: "0.9rem" }}>
                    Director of Premium Support @ LinkedIn | Leadership, Customer Service, Sales
                  </p>
                  <p className="text-muted mb-0 fs-6">Offerta di LinkedIn</p>
                </div>
                <Row className="align-items-center mb-3">
                  <Col xs="auto">
                    <div>
                      <img src="src/assets/download.png" alt="Profile" className="rounded-circle" style={{ width: 100 }} />
                    </div>
                    <div className=" ms-2">
                      <strong>Kristen J.</strong>
                      <span>
                        <svg style={{ width: "14px", height: "14px" }} className="ms-2">
                          <image href="https://static.licdn.com/aero-v1/sc/h/7lputkpzv6s224ks0n6c7h2qo" x="0" y="0" width="14" height="14"></image>
                        </svg>
                      </span>
                      <p>Director of Premium Support @ LinkedIn | Leadership, Customer</p>
                    </div>
                  </Col>
                </Row>
                <div>
                  <div className="align-items-center text-center ">
                    <p className="tecxt-muted mb-2">
                      <strong className="text-muted fw-medium">MARTEDì</strong>
                    </p>
                  </div>
                  <Row className="align-items-start mb-3">
                    <Col xs="auto">
                      <img src="src/assets/download.png" alt="Profile" className="rounded-circle" style={{ width: 50 }} />
                    </Col>
                    <Col>
                      <p>
                        <strong>Kristen J.</strong>
                        <span>
                          <svg style={{ width: "14px", height: "14px" }} className="ms-2">
                            <image href="https://static.licdn.com/aero-v1/sc/h/7lputkpzv6s224ks0n6c7h2qo" x="0" y="0" width="14" height="14"></image>
                          </svg>
                        </span>{" "}
                        <span className="text-muted">(She/Her)</span>
                        <span className="text-muted"> - 17:42</span>
                      </p>

                      <h6>Ciao Mario,</h6>
                      <p>
                        ecco un suggerimento veloce per raddoppiare le probabilità che i recruiter ti contattino. Attiva “Disponibile a lavorare” sul tuo
                        profilo LinkedIn. Puoi impostare le tue preferenze, inclusi ruoli e località, così potranno contattarti più facilmente per le
                        opportunità giuste.
                      </p>
                      <p>Dopodiché, puoi scegliere se condividere queste informazioni solo con i recruiter o con la tua community su LinkedIn.</p>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </div>
        </Col>

        {/* Sidebar destra fuori dalla div arrotondata */}
        <Col xs={12} md={3} className="text-muted text-center pt-3" style={{ fontSize: "0.8rem" }}>
          <div className="d-flex justify-content-center flex-wrap mb-3">
            <span className="me-3">Informazioni</span>
            <span className="me-3">Accessibilità</span>
            <span>Centro assistenza</span>
          </div>
          <div className="mb-3">
            <Dropdown>
              <Dropdown.Toggle variant="light" className="text-muted border-0 bg-transparent" style={{ fontSize: "0.8rem" }}>
                Privacy e condizioni
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.4)" }}>
                <Dropdown.Item href="#action1">Condizioni d'uso</Dropdown.Item>
                <Dropdown.Item href="#action2">Politica sulla privacy</Dropdown.Item>
                <Dropdown.Item href="#action3">Cookie</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="d-flex justify-content-center flex-wrap mt-2">
              <span className="me-3">Opzioni per gli annunci pubblicitari</span>
              <span>Pubblicità</span>
            </div>
            <Dropdown className="mt-2">
              <Dropdown.Toggle variant="light" className="text-muted border-0 bg-transparent" style={{ fontSize: "0.8rem" }}>
                Servizi alle aziende
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.4)" }}>
                <Dropdown.Item href="#action1">Servizi</Dropdown.Item>
                <Dropdown.Item href="#action2">Contatti</Dropdown.Item>
                <Dropdown.Item href="#action3">Supporto</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="d-flex justify-content-center flex-wrap mt-2">
              <span className="me-3">Scarica l'app LinkedIn</span>
              <span>Altro</span>
            </div>
          </div>
          <div className="mt-3">
            <svg style={{ width: "56px", height: "14px" }} className="mb-1">
              <image href="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr" x="0" y="0" width="56" height="14"></image>
            </svg>
            <span className="ps-1">LinkedIn Corporation © 2025</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Messaggistica;
