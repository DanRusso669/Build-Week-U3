import { Button, Col, Form, Image, Modal, Row } from "react-bootstrap";
import ButtonShowAll from "../ButtonShowAll";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchExperiences, manipulateExperiences } from "../../redux/actions";
import { format, parseISO } from "date-fns";
import { Pencil, TrashFill, PlusCircle } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";

const Esperienza = () => {
  const experiences = useSelector(state => state.experiences.content);
  const hover = useSelector(state => state.isHoverOn);
  const params = useParams();

  const dispatch = useDispatch();

  const [newExp, setNewExp] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYbP-248zDkKcJG_swsx0pK2Hhe8hwE0fHQ&s",
  });

  const [show, setShow] = useState(false);
  const [showMod, setShowMod] = useState(false);
  const [selectedExper, setSelectedExper] = useState(null);

  // ALERT SE È ANDATO TUTTO BENE
  const [everythingDone, setEverythingDone] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleCloseAlert = () => setEverythingDone(false);
  const handleShowAlert = message => {
    setEverythingDone(true);
    setModalMessage(message);
  };

  const handleClose = type => {
    if (type === "add") {
      setShow(false);
    } else if (type === "mod") {
      setShowMod(false);
    }
  };

  const handleShow = type => {
    if (type === "add") {
      setNewExp({
        role: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
        area: "",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYbP-248zDkKcJG_swsx0pK2Hhe8hwE0fHQ&s",
      });
      setShow(true);
    } else if (type === "mod") {
      setShowMod(true);
    }
  };

  useEffect(() => {
    dispatch(fetchExperiences(params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(manipulateExperiences("POST", newExp));
    handleClose("add");
    handleShowAlert("Hai aggiunto una nuova esperienza. ✔");
  };

  const handleSubmitModified = e => {
    e.preventDefault();

    dispatch(manipulateExperiences("PUT", newExp, selectedExper._id));
    handleClose("mod");
    handleShowAlert("Hai modificato questa esperienza. ✔");
  };

  const handleChange = (propName, propValue) => {
    setNewExp({ ...newExp, [propName]: propValue });
  };

  const handleClick = id => {
    dispatch(manipulateExperiences("DELETE", newExp, id));
    handleShowAlert("Hai eliminato questa esperienza.✔");
  };

  return (
    <>
      <div className="rounded-top-3 mt-2 bg-white p-4 border border-bottom-0" id="activityArea">
        <div className="d-flex justify-content-between align-items-center">
          <h5>Esperienza</h5>
          {!params.id && <PlusCircle onClick={() => handleShow("add")} />}
        </div>
        {experiences.map(exp => (
          <Row
            className="mt-3 border-bottom"
            key={exp._id}
            onMouseEnter={() => dispatch({ type: "TRUE", payload: exp._id })}
            onMouseLeave={() => dispatch({ type: "FALSE", payload: exp._id })}
          >
            <Col xs={3} sm={2} md={3} lg={2} xl={1}>
              <Image className="experienceImages" src={exp.image} />
            </Col>
            <Col xs={6} sm={8} md={6} lg={8} xl={9} className="pb-4">
              <p className="fw-bold">{exp.role}</p>
              <p>{exp.company}</p>
              {exp.startDate && exp.endDate ? (
                <p className="fw-light">
                  {format(parseISO(exp.startDate), "dd-MM-yyyy")} · {format(parseISO(exp.endDate), "dd-MM-yyyy")}
                </p>
              ) : (
                <p className="fw-light">No Info</p>
              )}
              <p className="fw-semibold mt-2">{exp.description}</p>
            </Col>
            <Col xs={3} sm={2} md={3} lg={2} xl={2}>
              {!params.id && hover.selectedRow === exp._id && (
                <div className="d-flex justify-content-end align-items-center">
                  <TrashFill className="trashBin" onClick={() => handleClick(exp._id)} />
                  <Pencil
                    className="ms-3 modifyIcon"
                    onClick={() => {
                      setSelectedExper(exp);
                      setNewExp({
                        role: exp.role,
                        company: exp.company,
                        startDate: format(parseISO(`${exp.startDate}`), "yyyy-MM-dd"),
                        endDate: format(parseISO(`${exp.endDate}`), "yyyy-MM-dd"),
                        description: exp.description,
                        area: exp.area,
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYbP-248zDkKcJG_swsx0pK2Hhe8hwE0fHQ&s",
                      });
                      handleShow("mod");
                    }}
                  />
                </div>
              )}
            </Col>
          </Row>
        ))}
      </div>
      <ButtonShowAll />

      {/* MODALE PER AGGIUNGERE ESPERIENZA */}
      <Modal show={show} onHide={() => handleClose("add")}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi un'Esperienza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="addExp" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="ruolo">
              <Form.Label>Ruolo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Web Developer..."
                autoFocus
                required
                value={newExp.role}
                onChange={e => handleChange("role", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="azienda">
              <Form.Label>Azienda</Form.Label>
              <Form.Control
                type="text"
                placeholder="Epicode School..."
                required
                onChange={e => handleChange("company", e.target.value)}
                value={newExp.company}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="area">
              <Form.Label>Città</Form.Label>
              <Form.Control type="text" required onChange={e => handleChange("area", e.target.value)} value={newExp.area} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="dataInizio">
              <Form.Label>Data Inizio</Form.Label>
              <Form.Control type="date" required onChange={e => handleChange("startDate", e.target.value)} value={newExp.startDate} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="dataFine">
              <Form.Label>Data Fine</Form.Label>
              <Form.Control type="date" required onChange={e => handleChange("endDate", e.target.value)} value={newExp.endDate} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Che mansioni hai svolto..."
                required
                onChange={e => handleChange("description", e.target.value)}
                value={newExp.description}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" form="addExp" variant="success">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* MODALE PER MODIFICARE ESPERIENZA */}
      <Modal show={showMod} onHide={() => handleClose("mod")}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica Esperienza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="addExp" onSubmit={handleSubmitModified}>
            <Form.Group className="mb-3" controlId="ruolo">
              <Form.Label>Ruolo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Web Developer..."
                autoFocus
                required
                value={newExp.role}
                onChange={e => handleChange("role", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="azienda">
              <Form.Label>Azienda</Form.Label>
              <Form.Control
                type="text"
                placeholder="Epicode School..."
                required
                onChange={e => handleChange("company", e.target.value)}
                value={newExp.company}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="area">
              <Form.Label>Città</Form.Label>
              <Form.Control type="text" required onChange={e => handleChange("area", e.target.value)} value={newExp.area} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="dataInizio">
              <Form.Label>Data Inizio</Form.Label>
              <Form.Control
                type="date"
                required
                onChange={e => handleChange("startDate", e.target.value)}
                value={newExp.startDate}
                // value={format(parseISO(`${newExp.startDate}`), "yyyy-MM-dd")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="dataFine">
              <Form.Label>Data Fine</Form.Label>
              <Form.Control
                type="date"
                required
                onChange={e => handleChange("endDate", e.target.value)}
                value={newExp.endDate}
                // value={format(parseISO(`${newExp.startDate}`), "yyyy-MM-dd")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Che mansioni hai svolto..."
                required
                onChange={e => handleChange("description", e.target.value)}
                value={newExp.description}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose("mod")}>
            Close
          </Button>
          <Button type="submit" form="addExp" variant="success">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* MODALE CONFERMA POST-PUT-DELETE */}
      <Modal show={everythingDone} onHide={handleCloseAlert}>
        <Modal.Header closeButton>
          <Modal.Title>È andato tutto bene!</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAlert}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Esperienza;
