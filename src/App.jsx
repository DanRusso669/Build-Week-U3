import { Routes, Route, BrowserRouter } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Rete from "./components/Rete";
import Lavoro from "./components/Lavoro";
import Messaggistica from "./components/Messaggistica";
import Notifiche from "./components/Notifiche";
import "./App.css";
import Footer from "./components/Footer";
import FirstCard from "./components/sectionArea/FirstCard";
import Aside from "./components/Aside";
import { Col, Container, Row } from "react-bootstrap";
import Home from "./components/Home";
import ServiceSection from "./components/sectionArea/ServiceSection";
import Informazioni from "./components/sectionArea/Informazioni";
import Attività from "./components/sectionArea/Attività";
import AsidePage from "./components/AsidePage";
import Projects from "./components/sectionArea/Projects";

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
                    <Informazioni />
                    <ServiceSection />
                    <Attività />
                    <Projects />
                  </Col>
                  <Col xs={12} md={6} lg={5} xl={4}>
                    <Aside title={"Altri profili per te"} button={"Segui"} />
                    <Aside title={"Persone che potresti conoscere"} button={"Aggiungi"} />
                    <AsidePage />
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
          <Route path="/home" element={<Home />} />
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
