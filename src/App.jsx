import "./App.css";
import Footer from "./components/Footer";
import FirstCard from "./components/FirstCard";
import Aside from "./components/Aside";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <Container className="mainContainer">
        <Row className="gx-5">
          <Col xs={12} md={6} lg={7} xl={8}>
            <FirstCard />
          </Col>
          <Col xs={12} md={6} lg={5} xl={4}>
            <Aside />
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  );
}

export default App;
