import { Col, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import InputText from "./InputText";
import { fetchProfile } from "../../redux/actions";
import { CardHeading, CardImage, PlayBtnFill } from "react-bootstrap-icons";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ onOpenModal }) => {
  const profile = useSelector(state => state.profile.content);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  return (
    <>
      <Row className="justify-content-center">
        <Col xs={2}>
          <Image
            onClick={() => {
              navigate("/profilo");
            }}
            src={profile.image}
            alt="profileImage"
            className="imgProfiles"
            roundedCircle
          />
        </Col>
        <Col xs={10}>
          <InputText />
        </Col>
      </Row>

      <Row className="justify-content-between">
        <Col xs={3}>
          <div className="d-flex align-items-center mt-3" onClick={onOpenModal} style={{ cursor: "pointer" }}>
            <PlayBtnFill className="text-success fs-3 mx-2" />
            <div>Video</div>
          </div>
        </Col>
        <Col xs={3}>
          <div className="d-flex align-items-center mt-3" onClick={onOpenModal} style={{ cursor: "pointer" }}>
            <CardImage className="text-primary fs-3 mx-2" />
            <div>Foto</div>
          </div>
        </Col>
        <Col xs={5}>
          <div className="d-flex align-items-center mt-3" style={{ cursor: "pointer" }}>
            <CardHeading className="text-danger fs-3 mx-2" />
            <div>Scrivi un articolo</div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default CreatePost;
