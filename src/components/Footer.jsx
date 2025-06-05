import { Col, Form, FormLabel, Row } from "react-bootstrap";
import { ShieldShaded, GearFill, QuestionCircleFill } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <>
      <Row id="footer" className="mt-4 gx-0" sm={5}>
        <Col>
          <p>Informazioni</p>
          <p>Informativa sulla community professionale</p>
          <p>Privacy e condizioni</p>
          <p>Sales Solutions</p>
          <p>Centro Sicurezza</p>
        </Col>
        <Col>
          <p>Accessibilità</p>
          <p>Carriera</p>
          <p>Opzioni per gli annunci pubblicitari</p>
          <p>Mobile</p>
        </Col>
        <Col>
          <p>Talent Solutions</p>
          <p>Soluzioni di marketing</p>
          <p>Pubblciità</p>
          <p>Piccole Imprese</p>
        </Col>
        <Col>
          <div className="d-flex">
            <QuestionCircleFill className="me-2 fs-5 mt-1 footerIcons" />
            <span className="notClickableP">
              <h5>Domande?</h5>
              <p className=" fw-normal">Visita il nostro Centro assistenza.</p>
            </span>
          </div>
          <div className="d-flex">
            <GearFill className="me-2 fs-5 mt-1 footerIcons" />
            <span className="notClickableP">
              <h5>Gestisci il tuo account e la tua privacy</h5>
              <p className=" fw-normal">Vai alle impostazioni</p>
            </span>
          </div>
          <div className="d-flex">
            <ShieldShaded className="me-2 fs-5 mt-1 footerIcons" />
            <span className="notClickableP">
              <h5>Trasparenza sui contenuti consigliati</h5>
              <p className="fw-normal">Scopri di più sui contenuti consigliati.</p>
            </span>
          </div>
        </Col>
        <Col>
          <FormLabel id="labelLanguageSelector" className="mt-4">
            Seleziona la lingua
          </FormLabel>
          <Form.Select aria-label="Default select example" id="languageSelector">
            <option>Italiano (Italiano)</option>
            <option value="1">English (Inglese)</option>
            <option value="2">Deutsch (Tedesco)</option>
            <option value="3">Français (Francese)</option>
            <option value="3">简体中文 (Cinese Semplificato)</option>
          </Form.Select>
        </Col>
      </Row>
      <p className="fw-lighter" id="credits">
        LinkedIn Corporation © 2025
      </p>
    </>
  );
};

export default Footer;
