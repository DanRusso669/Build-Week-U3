import { Container } from "react-bootstrap";
import { ArrowRightShort } from "react-bootstrap-icons";

const ButtonShowAll = () => {
  return (
    <>
      <Container>
        <div className="d-flex justify-content-center rounded-bottom buttonShowMore p-2">
          <a href="#">
            <span>Mostra altro</span>
            <ArrowRightShort className="iconaButton" />
          </a>
        </div>
      </Container>
    </>
  );
};

export default ButtonShowAll;
