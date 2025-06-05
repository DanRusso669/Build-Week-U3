import { Container } from "react-bootstrap";
import ButtonShowAll from "../ButtonShowAll";

const Courses = () => {
  return (
    <>
      <Container className="rounded-3 rounded-bottom-0 border-bottom-0 mt-2 bg-white p-4 border fontSize">
        <h5 className="mb-3">Corsi</h5>
        <h6>High Speed Photoshop - Parma 24-25/09/16 - Fotografiaprofessionale.it</h6>
        <hr className="border" />
        <h6>SMARTinno</h6>
        <p>Creative Business LAB</p>
      </Container>
      <ButtonShowAll />
    </>
  );
};

export default Courses;
