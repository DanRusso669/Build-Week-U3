import { Navbar, Nav, Container, Dropdown, Form, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUsers, faBriefcase, faComments, faBell, faUser } from "@fortawesome/free-solid-svg-icons";

const MyNavbar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="justify-content-center position-sticky top-0 border-bottom shadow-sm py-0">
        <Container className="text-center pt-1">
          <Navbar.Brand as={Link} to="/" className="mx-auto">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn Logo" style={{ height: "40px" }} />
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

              <Dropdown>
                <Dropdown.Toggle
                  variant="light"
                  className="text-center d-flex flex-column align-items-center"
                  style={{ boxShadow: "none", backgroundColor: "transparent", border: "none" }}
                >
                  <FontAwesomeIcon icon={faUser} className="mb-1" />
                  <span>Tu</span>
                  <FontAwesomeIcon icon="caret-down" className="mt-1" />
                </Dropdown.Toggle>
                <Dropdown.Menu align="end" style={{ width: "200px" }}>
                  <div className="d-flex flex-column align-items-center p-3">
                    <Button
                      className="btn btn-outline-primary w-100 rounded-pill mb-2"
                      style={{ height: 35, backgroundColor: "white", borderColor: "#0d6efd" }}
                      as={Link}
                      to="/"
                    >
                      Visualizza Profilo
                    </Button>
                  </div>
                  <Dropdown.Item as={Link} to="/settings">
                    Impostazioni
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item as={Link} to="/logout">
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div className="d-flex align-items-left border-start shadow-sm ps-2">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="light"
                    className="text-center d-flex flex-column align-items-center"
                    style={{ boxShadow: "none", backgroundColor: "transparent", border: "none" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="mb-1" viewBox="0 0 16 16">
                      <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z" />
                    </svg>
                    <span>Per le aziende</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu align="end">
                    <Dropdown.Item as={Link} to="/aziende/servizi">
                      Servizi
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/aziende/contatti">
                      Contatti
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/aziende/supporto">
                      Supporto
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
