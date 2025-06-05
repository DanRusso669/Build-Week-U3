import { Dropdown } from "react-bootstrap";

const AsideFooterDx = () => {
  return (
    <>
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
    </>
  );
};

export default AsideFooterDx;
