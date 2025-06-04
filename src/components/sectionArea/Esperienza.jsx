import { Col, Image, Row } from "react-bootstrap";
import ButtonShowAll from "../ButtonShowAll";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchExperiences } from "../../redux/actions";
import { format, parseISO } from "date-fns";

const Esperienza = () => {
  const experiences = useSelector(state => state.experiences.content);

  const dispatch = useDispatch();

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
        <h5>Esperienza</h5>
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
