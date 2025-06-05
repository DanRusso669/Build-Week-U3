import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import ButtonShowAll from "../ButtonShowAll";

const Projects = () => {
  return (
    <>
      <Container className="rounded-3 rounded-bottom-0 border-bottom-0 mt-2 bg-white p-4 border fontSize">
        <h5 className="mb-2">Progetti</h5>
        <div>
          <h6>HospitalRun</h6>
          <p className="mb-1">Da ago 2019 - presente</p>
          <Container>
            <p className="mb-1">Associato a Nucleode SRL</p>
            <div>
              <Button variant="outline-secondary" className="rounded-pill px-3 py-1 border-2 ">
                Mostra Progetti
                <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-1" />
              </Button>
            </div>
          </Container>
          <p className="mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nemo incidunt accusamus dolorum adipisci est veritatis aut eum debitis laborum.
          </p>
        </div>
        <hr className="border" />
        <Container>
          <h6>MyShiftPal</h6>
          <p className="mb-1">Da ago 2019 - presente</p>
          <Container>
            <p className="mb-1">Associato a Nucleode SRL</p>
            <div>
              <Button variant="outline-secondary" className="rounded-pill px-3 py-1 border-2 ">
                Mostra Progetti <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-1" />
              </Button>
            </div>
          </Container>
          <p className="mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repellat sed excepturi, veritatis dolorem tempore! Ab earum illum quae optio.
          </p>
        </Container>
      </Container>
      <ButtonShowAll />
    </>
  );
};
export default Projects;
