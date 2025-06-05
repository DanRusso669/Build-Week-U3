import { Modal, Button } from "react-bootstrap";
import ImageInput from "../ImageInput";

const ModaleNewPost = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Crea un nuovo post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ImageInput />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Chiudi
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Salva
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModaleNewPost;
