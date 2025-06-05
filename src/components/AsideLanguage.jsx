import { Col } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";

const AsideLanguage = () => {
  return (
    <>
      <div className="bg-light rounded p-3 mt-4 rounded-bottom-0 border-bottom-0 border">
        <Col>
          <h4>
            Lingua del profilo <Pencil className="fs-5 ms-5" />
          </h4>
          <p>Italiano</p>
        </Col>
        <hr />
        <Col>
          <h4>
            Profilo pubblico e URL <Pencil className="fs-5 ms-1" />
          </h4>
        </Col>
      </div>
    </>
  );
};
export default AsideLanguage;
