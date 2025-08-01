import { Container, Row, Col } from "react-bootstrap";
import FirstLeftCard from "./homeComponets/FirstLeftCard";
import SecondLeftComponent from "./homeComponets/SecondLeftComponent";
import ThirdLeftComponent from "./homeComponets/ThirdLeftComponent";
import FourthLeftComponent from "./homeComponets/FourthLeftComponent";
import FirstRightCard from "./homeComponets/FirstRightCard";
import SecondRightCard from "./homeComponets/SecondRightCard";
import FooterRight from "./homeComponets/FooterRight";
import CentralCard from "./homeComponets/CentralCard";

const Home = () => {
  return (
    <>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={4} xl={2} xxl={2}>
            <FirstLeftCard />
            <SecondLeftComponent />
            <ThirdLeftComponent />
            <FourthLeftComponent />
          </Col>
          <Col xs={12} md={10} lg={8} xl={5} xxl={5}>
            <Container className="rounded-3 mt-2 bg-white p-4 border fontSize">
              <CentralCard />
            </Container>
          </Col>
          <Col xs={12} md={10} lg={10} xl={3} xxl={3}>
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
