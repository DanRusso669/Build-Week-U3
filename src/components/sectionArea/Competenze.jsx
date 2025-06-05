import { Container, Row, Col } from "react-bootstrap";
import ButtonShowAll from "../ButtonShowAll";

const Competenze = () => {
  return (
    <>
      <Container className="rounded-3 rounded-bottom-0 border-bottom-0 mt-2 bg-white p-4 border fontSize">
        <h5 className="mb-2 ">Competenze</h5>
        <div>
          <h6 className="mb-2">Prototyping</h6>
          <Row className="align-items-center flex-nowrap">
            <Col xs="auto">
              <img src="../src/assets/react.svg" alt="icona" />
            </Col>
            <Col>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eius ullam hic culpa similique alias?</Col>
          </Row>
        </div>
        <hr className="border" />
        <div>
          <h6 className="mb-2">Prototyping</h6>
          <Row className="align-items-center flex-nowrap">
            <Col xs="auto">
              <img src="../src/assets/react.svg" alt="icona" />
            </Col>
            <Col>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eius ullam hic culpa similique alias?</Col>
          </Row>
        </div>
      </Container>
      <ButtonShowAll />
    </>
  );
};
export default Competenze;
