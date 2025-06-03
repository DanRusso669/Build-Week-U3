import React, { useState } from "react";
import { Navbar, Nav, Container, Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUsers, faBriefcase, faComments, faBell, faUser, faTh /* faSearch  */ } from "@fortawesome/free-solid-svg-icons"; // Importato faSearch per l'icona lente

const MyNavbar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Navbar bg="light" expand="lg" className="justify-content-center position-sticky top-0">
        <Container className="text-center">
          <Navbar.Brand as={Link} to="/" className="mx-auto">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn Logo" style={{ height: "30px" }} />
          </Navbar.Brand>

          <Form className="d-flex mx-auto ms-2" style={{ width: "300px" }}>
            <Form.Control type="search" placeholder="Cerca" className="me-2" aria-label="Search" />
          </Form>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-start">
            <Nav style={{ gap: "20px" }}>
              <Nav.Link as={Link} to="/home" className="text-center d-flex flex-column align-items-center">
                <FontAwesomeIcon icon={faHome} className="mb-1" />
                <span>Home</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/rete" className="text-center d-flex flex-column align-items-center">
                <FontAwesomeIcon icon={faUsers} className="mb-1" />
                <span>Rete</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/lavoro" className="text-center d-flex flex-column align-items-center">
                <FontAwesomeIcon icon={faBriefcase} className="mb-1" />
                <span>Lavoro</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/messaggistica" className="text-center d-flex flex-column align-items-center">
                <FontAwesomeIcon icon={faComments} className="mb-1" />
                <span>Messaggistica</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/notifiche" className="text-center d-flex flex-column align-items-center">
                <FontAwesomeIcon icon={faBell} className="mb-1" />
                <span>Notifiche</span>
              </Nav.Link>
              <Nav.Link onClick={handleShow} className="text-center d-flex flex-column align-items-center">
                <FontAwesomeIcon icon={faUser} className="mb-1" />
                <span>Tu</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/aziende" className="text-center d-flex flex-column align-items-center">
                <FontAwesomeIcon icon={faTh} className="mb-1" />
                <span>Per le aziende</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-center w-100">Profilo Utente</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p>Contenuto del profilo utente.</p>
          <Link to="/" className="btn btn-outline-primary rounded-pill  w-100">
            Visualizza Profilo
          </Link>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyNavbar;
