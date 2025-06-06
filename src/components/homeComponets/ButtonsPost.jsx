import { faRetweet } from "@fortawesome/free-solid-svg-icons/faRetweet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Row } from "react-bootstrap";
import { ChatText, HandThumbsUp, Send } from "react-bootstrap-icons";

const ButtonsPost = () => {
  return (
    <>
      <Row className="d-flex justify-content-between my-2 ">
        <Col xs={2}>
          <Button variant="trasparent fs-6 p-0 btnClick">
            <Row className="d-flex justify-content-start">
              <Col xs={6} className="m-0 p-0">
                <HandThumbsUp />
              </Col>
              <Col xs={6} className="m-0 p-0">
                Consiglia
              </Col>
            </Row>
          </Button>
        </Col>
        <Col xs={2}>
          <Button variant="trasparent fs-6 p-0 btnClick">
            <Row className="d-flex justify-content-start">
              <Col xs={6} className="m-0 p-0">
                <ChatText />
              </Col>
              <Col xs={6} className="m-0 p-0">
                Commenta
              </Col>
            </Row>
          </Button>
        </Col>
        <Col xs={2}>
          <Button variant="trasparent fs-6 p-0 btnClick">
            <Row className="d-flex justify-content-start">
              <Col xs={6} className="m-0 p-0">
                <FontAwesomeIcon icon={faRetweet} />
              </Col>
              <Col xs={6} className="m-0 p-0">
                Condividi
              </Col>
            </Row>
          </Button>
        </Col>
        <Col xs={2}>
          <Button variant="trasparent fs-6 p-0 btnClick">
            <Row className="d-flex justify-content-start">
              <Col xs={6} className="m-0 p-0">
                <Send />
              </Col>
              <Col xs={6} className="m-0 p-0">
                Invia
              </Col>
            </Row>
          </Button>
        </Col>
      </Row>
    </>
  );
};
export default ButtonsPost;
