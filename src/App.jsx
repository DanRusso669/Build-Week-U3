import { Routes, Route, BrowserRouter } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Rete from "./components/Rete";
import Lavoro from "./components/Lavoro";
import Messaggistica from "./components/Messaggistica";
import Notifiche from "./components/Notifiche";
import Profilo from "./components/Profilo";
import "./App.css";
import Footer from "./components/Footer";
import FirstCard from "./components/FirstCard";
import Aside from "./components/Aside";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route
            path="/"
            element={
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
            }
          />
          <Route path="/rete" element={<Rete />} />
          <Route path="/lavoro" element={<Lavoro />} />
          <Route path="/messaggistica" element={<Messaggistica />} />
          <Route path="/notifiche" element={<Notifiche />} />
          <Route path="/tu" element={<Profilo />} />
        </Routes>
        {/* <Container className="mainContainer">
          <Row className="gx-5">
            <Col xs={12} md={6} lg={7} xl={8}>
              <FirstCard />
            </Col>
            <Col xs={12} md={6} lg={5} xl={4}>
              <Aside />
            </Col>
          </Row>
          <Footer />
        </Container> */}
      </BrowserRouter>
    </>
  );
}

export default App;
