import { Container, Row, Col } from "react-bootstrap";
import FirstLeftCard from "./homeComponets/FirstLeftCard";
import SecondLeftComponent from "./homeComponets/SecondLeftComponent";
import ThirdLeftComponent from "./homeComponets/ThirdLeftComponent";
import FourthLeftComponent from "./homeComponets/FourthLeftComponent";
import FirstRightCard from "./homeComponets/FirstRightCard";
import SecondRightCard from "./homeComponets/SecondRightCard";
import FooterRight from "./homeComponets/FooterRight";

const Home = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs={2}>
            <FirstLeftCard />
            <SecondLeftComponent />
            <ThirdLeftComponent />
            <FourthLeftComponent />
          </Col>
          <Col xs={5}>
            <Container className="rounded-3 mt-2 bg-white p-4 border" style={{ fontSize: "0.875rem" }}>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed possimus, culpa voluptatum harum facere minima ipsum. Omnis sint quae qui!</p>
              </div>
            </Container>
          </Col>
          <Col xs={3}>
            <FirstRightCard />
            <SecondRightCard />
            <FooterRight />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
