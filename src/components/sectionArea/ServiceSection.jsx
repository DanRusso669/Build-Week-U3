import { Button, Container } from "react-bootstrap";
import ButtonShowAll from "../ButtonShowAll";

const ServiceSection = () => {
  return (
    <>
      <Container className="rounded-3 rounded-bottom-0 border-bottom-0 mt-2 bg-white p-4 border">
        <h5 className="mb-3">Servizi</h5>
        <p className="fw-semibold fontSize">
          Graphic Design • Progettazione dell’esperienza utente (UED) • Web Design • Ricerca UX • Interaction Design • Sviluppo Web • Consulenza informatica{" "}
        </p>
        <div className="mt-3">
          <Button variant="outline-secondary" className="rounded-pill px-3 py-1 border-2 ">
            Richiedi servizi
          </Button>
        </div>
      </Container>
      <ButtonShowAll />
    </>
  );
};
export default ServiceSection;
