import { Container, Dropdown } from "react-bootstrap";

const FooterRight = () => {
  return (
    <Container className="rounded-3 mt-3 py-2 px-3" style={{ fontSize: "0.75rem" }}>
      <div className="d-flex justify-content-center flex-wrap mb-2">
        <span className="me-3">Informazioni</span>
        <span className="me-3">Accessibilità</span>
        <span>Centro assistenza</span>
      </div>

      <div className="text-center mb-2">
        <Dropdown>
          <Dropdown.Toggle variant="light" className="text-muted border-0 bg-transparent p-0" style={{ fontSize: "0.75rem" }}>
            Privacy e condizioni
          </Dropdown.Toggle>
          <Dropdown.Menu style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.4)" }}>
            <Dropdown.Item href="#action1">Condizioni d'uso</Dropdown.Item>
            <Dropdown.Item href="#action2">Politica sulla privacy</Dropdown.Item>
            <Dropdown.Item href="#action3">Cookie</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="d-flex justify-content-center flex-wrap mb-2">
        <span className="me-3">Opzioni per gli annunci pubblicitari</span>
        <span>Pubblicità</span>
      </div>

      <div className="text-center mb-2">
        <Dropdown>
          <Dropdown.Toggle variant="light" className="text-muted border-0 bg-transparent p-0" style={{ fontSize: "0.75rem" }}>
            Servizi alle aziende
          </Dropdown.Toggle>
          <Dropdown.Menu style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.4)" }}>
            <Dropdown.Item href="#action1">Servizi</Dropdown.Item>
            <Dropdown.Item href="#action2">Contatti</Dropdown.Item>
            <Dropdown.Item href="#action3">Supporto</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="d-flex justify-content-center flex-wrap mb-2">
        <span className="me-3">Scarica l'app LinkedIn</span>
        <span>Altro</span>
      </div>

      <div className="d-flex justify-content-center align-items-center mt-2">
        <svg style={{ width: "56px", height: "14px" }} className="mb-1">
          <image href="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr" x="0" y="0" width="56" height="14"></image>
        </svg>
        <span className="ps-1">LinkedIn Corporation © 2025</span>
      </div>
    </Container>
  );
};

export default FooterRight;
