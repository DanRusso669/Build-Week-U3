import { Container, Card, Row, Col, Button, Dropdown, Modal, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faArrowUpFromBracket, faObjectGroup } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { fetchProfile } from "../../redux/actions";

const FirstCard = () => {
  const profile = useSelector((state) => state.profile.content);

  const { id } = useParams();
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setImageUrl("");
  };

  const handleUploadImage = () => {
    if (!imageUrl) {
      alert("Inserisci un URL prima di caricare.");
      return;
    }

    if (!imageUrl.startsWith("http")) {
      alert("Inserisci un URL valido.");
      return;
    }

    Cookies.set("coverImage", imageUrl, { expires: 7 }); // Salva 7 giorni
    alert("Immagine salvata con successo!");
    handleCloseModal();
  };

  useEffect(() => {
    dispatch(fetchProfile(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Container className="p-0 mt-4">
      <Card className="border rounded-3">
        <div className="position-relative ImmagineCardProfile">
          {/* Immagine di copertina (presa dai cokie) */}
          <Card.Img
            src={Cookies.get("coverImage") || "src/assets/download.png"}
            style={{
              height: "12rem",
              objectFit: "cover",
              width: "100%",
              borderRadius: 0,
            }}
          />

          {/* Icona della fotocamera */}
          <Dropdown className="position-absolute" style={{ top: "15px", right: "15px" }}>
            <Dropdown.Toggle
              as="div"
              className="d-flex align-items-center justify-content-center"
              style={{
                cursor: "pointer",
                backgroundColor: "rgba(255, 255, 255, 0.38)",
                padding: "0.5rem",
                borderRadius: "50%",
              }}
              bsPrefix="custom-toggle"
            >
              <FontAwesomeIcon icon={faCamera} style={{ color: "#2f5eb1" }} />
            </Dropdown.Toggle>

            <Dropdown.Menu
              align="end"
              drop="up"
              style={{
                position: "absolute",
                inset: "0px 0px auto auto",
                transform: "translate(10px, 95px)",
              }}
            >
              <Dropdown.Item href="#" onClick={handleShowModal}>
                <FontAwesomeIcon className="me-2" icon={faArrowUpFromBracket} />
                Carica nuova immagine
              </Dropdown.Item>
              <Dropdown.Item href="#" className="text-muted text-wrap">
                <FontAwesomeIcon className="me-2" icon={faObjectGroup} />
                Fai un'ottima prima impressione usando fino a 5 immagini
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Immagine del profilo (presa dall'API) */}
          <img
            src={profile.image}
            alt="Foto profilo"
            style={{
              width: "10rem",
              height: "10rem",
              borderRadius: "50%",
              border: "3px solid white",
              position: "absolute",
              bottom: "-2.5rem",
              left: "20px",
              objectFit: "cover",
            }}
          />
        </div>

        <Card.Body className="pt-5 px-4">
          <Row>
            <Col md={8} className="align-items-center">
              <h4 className="mb-1">
                {profile.name} {profile.surname}
              </h4>
              <p className="text-muted mb-1" style={{ fontSize: "1rem" }}>
                <span className="fw-semibold">{profile.title}</span>
              </p>
              <p className="text-muted mb-1" style={{ fontSize: "1rem" }}>
                {profile.area}{" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  {" "}
                  Informazioni di contatto
                </a>
              </p>
              <p className="text-muted mb-2" style={{ fontSize: "1rem" }}>
                <span className="fw-semibold">Più di 500 </span>
                collegamenti
              </p>

              <div className="d-flex gap-2 flex-wrap">
                <Button variant="primary" size="sm" className="rounded-pill">
                  Collegati
                </Button>
                <Button variant="outline-primary" size="sm" className="rounded-pill">
                  Messaggio
                </Button>
                <Button variant="outline-secondary" size="sm" className="rounded-pill">
                  Altro
                </Button>
              </div>
            </Col>

            <Col md={4} className="align-items-center d-block d-md-none d-lg-block">
              <Card className="mb-2">
                <div className="d-flex">
                  <img
                    src={profile.image}
                    alt="foto"
                    className="me-3"
                    style={{
                      width: "3rem",
                      height: "3rem",
                      objectFit: "cover",
                      borderRadius: "0.25rem",
                    }}
                  />

                  <div className="d-flex align-items-center">
                    <p className="fw-semibold" style={{ fontSize: "0.9rem" }}>
                      Senior Developer
                    </p>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Modale per caricare immagine */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi un'immagine di copertina</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formUrl" className="mb-3">
            <Form.Label>Inserisci l'URL dell'immagine</Form.Label>
            <Form.Control type="text" placeholder="https://example.com/immagine.jpg" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
          </Form.Group>
          <Button variant="primary" onClick={handleUploadImage}>
            Salva immagine
          </Button>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default FirstCard;
