import { Button, Col, Form, Image, Modal, Row } from "react-bootstrap";
import ButtonShowAll from "../ButtonShowAll";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchExperiences } from "../../redux/actions";
import { format, parseISO } from "date-fns";
import { Pencil } from "react-bootstrap-icons";

const Esperienza = () => {
  const experiences = useSelector(state => state.experiences.content);

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(fetchExperiences());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(experiences);
  });

  return (
    <>
      <div className="rounded-top-3 mt-2 bg-white p-4 border border-bottom-0" id="activityArea">
        <div className="d-flex justify-content-between align-items-center">
          <h5>Esperienza</h5>
          <Pencil onClick={handleShow} />
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Aggiungi un'Esperienza</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="ruolo">
                  <Form.Label>Ruolo</Form.Label>
                  <Form.Control type="text" placeholder="Web Developer..." autoFocus required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="azienda">
                  <Form.Label>Azienda</Form.Label>
                  <Form.Control type="text" placeholder="Epicode School..." autoFocus />
                </Form.Group>
                <Form.Group className="mb-3" controlId="area">
                  <Form.Label>Città</Form.Label>
                  <Form.Control type="date" autoFocus />
                </Form.Group>
                <Form.Group className="mb-3" controlId="dataInizio">
                  <Form.Label>Data Inizio</Form.Label>
                  <Form.Control type="date" autoFocus />
                </Form.Group>
                <Form.Group className="mb-3" controlId="dataFine">
                  <Form.Label>Data Fine</Form.Label>
                  <Form.Control type="date" autoFocus />
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                  <Form.Label>Descrizione</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Che mansioni hai svolto..." />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="success" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        {experiences.map(exp => (
          <Row className="mt-3 border-bottom">
            <Col xs={3} sm={2} md={3} lg={2} xl={1}>
              <Image className="experienceImages" src={exp.image} />
            </Col>
            <Col xs={9} sm={10} md={9} lg={10} xl={11} className="pb-4">
              <p className="fw-bold">{exp.role}</p>
              <p>{exp.company}</p>
              <p className="fw-light">
                {format(parseISO(`${exp.startDate}`), "do MMM, yyyy")} · {format(parseISO(`${exp.endDate}`), "do MMM, yyyy")}
              </p>
              <p className="fw-semibold mt-2">{exp.description}</p>
            </Col>
          </Row>
        ))}
      </div>
      <ButtonShowAll />
    </>
  );
};

export default Esperienza;
