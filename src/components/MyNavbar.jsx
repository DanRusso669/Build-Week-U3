import { useState } from "react";
import { Navbar, Nav, Container, Dropdown, Form, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBriefcase, faBell, faUserFriends, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const MyNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const profile = useSelector((state) => state.profile.content);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className="justify-content-center position-sticky top-0 border-bottom border-1 py-0" style={{ zIndex: 1000 }}>
        <Container className="text-center pt-1">
          <Navbar.Brand as={Link} to="/" className="mx-auto">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn Logo" style={{ height: "40px" }} />
          </Navbar.Brand>

          <Form className="d-flex mx-auto ms-2" style={{ width: "300px" }}>
            <Form.Control type="search" placeholder="Cerca" className="me-2" aria-label="Search" />
          </Form>

          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-start">
              <Nav style={{ gap: "20px" }}>
                <Nav.Link
                  as={Link}
                  to="/home"
                  className={`text-center d-flex flex-column align-items-center ${location.pathname === "/home" ? "active-link" : ""}`}
                >
                  <FontAwesomeIcon icon={faHome} className="mb-1" />
                  <span>Home</span>
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/rete"
                  className={`text-center d-flex flex-column align-items-center ${location.pathname === "/rete" ? "active-link" : ""}`}
                >
                  <FontAwesomeIcon icon={faUserFriends} className="mb-1" />
                  <span>Rete</span>
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/lavoro"
                  className={`text-center d-flex flex-column align-items-center ${location.pathname === "/lavoro" ? "active-link" : ""}`}
                >
                  <FontAwesomeIcon icon={faBriefcase} className="mb-1" />
                  <span>Lavoro</span>
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/messaggistica"
                  className={`text-center d-flex flex-column align-items-center ${location.pathname === "/messaggistica" ? "active-link" : ""}`}
                >
                  <FontAwesomeIcon icon={faCommentDots} className="mb-1" />
                  <span>Messaggistica</span>
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/notifiche"
                  className={`text-center d-flex flex-column align-items-center ${location.pathname === "/notifiche" ? "active-link" : ""}`}
                >
                  <FontAwesomeIcon icon={faBell} className="mb-1" />
                  <span>Notifiche</span>
                </Nav.Link>

                <Dropdown>
                  <Dropdown.Toggle
                    variant="light"
                    className="text-center d-flex flex-column align-items-center"
                    style={{ boxShadow: "none", backgroundColor: "transparent", border: "none" }}
                  >
                    <a href="/profile">
                      <img src={profile.image} alt="User Avatar" className="rounded-circle" style={{ width: "20px", height: "20px" }} />
                    </a>
                    <span>Tu</span>
                    <FontAwesomeIcon icon="caret-down" className="mt-1" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu align="end" style={{ width: "280px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.4)" }}>
                    {/*  DATI ACCOUNT DROPDOWN*/}
                    <div className="d-flex align-items-center ">
                      <div className="d-flex justify-content-start align-items-center p-3">
                        <img src={profile.image} alt="User Avatar" className="rounded-circle" style={{ width: "60px", height: "60px" }} />
                      </div>
                      <div className="text-start ms-2">
                        <h6 className="mb-0">
                          {profile.name} {profile.surname}
                        </h6>{" "}
                        <p className="text-secondary">{profile.title}</p>
                      </div>
                    </div>
                    <div className="d-flex flex-column align-items-center px-3 border-bottom">
                      <Button
                        className="btn btn-outline-primary w-100 rounded-pill mb-2"
                        style={{ height: 35, backgroundColor: "white", borderColor: "#0d6efd" }}
                        as={Link}
                        to="/"
                        onClick={(e) => e.target.closest(".dropdown").querySelector(".dropdown-toggle").click()}
                      >
                        Visualizza Profilo
                      </Button>
                    </div>
                    <div className="d-flex flex-column align-items-start p-3">
                      <h6>Account</h6>

                      <a className="text-decoration-none text-secondary" href="#">
                        🟨 Prova 1 mese di Premium per 0 EUR{" "}
                      </a>

                      <a className="text-decoration-none text-muted" href="#">
                        Impostazioni privacy
                      </a>
                      <a className="text-decoration-none text-muted" href="#">
                        Guida
                      </a>
                      <a className="text-decoration-none text-muted" href="#">
                        Lingua
                      </a>
                      <hr />
                      <h6 className="mb-1"> Gestisci</h6>
                      <a className="text-decoration-none text-muted" href="#">
                        Post e attività
                      </a>
                      <a className="text-decoration-none text-muted" href="#">
                        Account per la pubblicazione
                      </a>
                    </div>

                    <Dropdown.Divider />
                    <Dropdown.Item as={Link} to="/logout" onClick={(e) => e.target.closest(".dropdown").querySelector(".dropdown-toggle").click()}>
                      Esci
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <div className="d-flex align-items-left border-start shadow-sm ps-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="light"
                      className="text-center d-flex flex-column border-bottom align-items-center"
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
          </div>
          <div className="col-3 d-flex justify-content-start ps-3">
            <a style={{ color: "brown" }} href="PayPremium">
              {" "}
              Prova Premium per 0 EUR{" "}
            </a>
          </div>
        </Container>
      </Navbar>

      {/* Sezione messaggi CHAT */}
      <div className="position-fixed p-3" style={{ zIndex: 1050, position: "fixed", bottom: "-15px", right: "20px" }}>
        <div
          className="bg-white border rounded shadow-sm"
          style={{
            width: "350px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.4)",
            borderRadius: "10px",
          }}
        >
          <div
            className="d-flex align-items-center justify-content-between p-3"
            style={{
              cursor: "pointer",
              borderBottom: "1px solid #ddd",
            }}
            onClick={toggleMenu}
          >
            {profile.image ? (
              <img src={profile.image} alt="Messaggi" style={{ width: "30px", height: "30px", borderRadius: "50%" }} className="me-2" />
            ) : (
              <span>Caricamento...</span>
            )}
            <span>Messaggistica</span>
            <FontAwesomeIcon icon={isMenuOpen ? faChevronDown : faChevronUp} className="ms-auto" style={{ fontSize: "20px" }} />
          </div>
          {isMenuOpen && (
            <div
              className="overflow-auto"
              style={{
                maxHeight: "400px",
              }}
            >
              <div className="p-3 border-bottom">
                <input
                  type="text"
                  placeholder="Cerca messaggi"
                  className="form-control mb-3"
                  style={{
                    borderRadius: "20px",
                    border: "1px solid #ddd",
                  }}
                />
                <div className="d-flex align-items-center mb-3">
                  <img src="src/assets/download.png" alt="Avatar" className="rounded-circle me-2" style={{ width: "40px", height: "40px" }} />
                  <div>
                    <h6 className="mb-0">Kristen J.</h6>
                    <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                      Offerta di LinkedIn - Ciao Nicolae, ecco un suggerimento veloce...
                    </p>
                  </div>
                  <span className="ms-auto text-muted" style={{ fontSize: "12px" }}>
                    3 giu
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyNavbar;
