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
import Esperienza from "./components/sectionArea/Esperienza";
import Competenze from "./components/sectionArea/Competenze";
import References from "./components/sectionArea/References";
import Courses from "./components/sectionArea/Courses";
import Prizes from "./components/sectionArea/Prizes";
import Languages from "./components/sectionArea/Languages";
import Causes from "./components/sectionArea/Causes";
import Interests from "./components/sectionArea/Interests";

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
                  <Col xs={12} md={7} lg={7} xl={8}>
                    <FirstCard />
                    <Informazioni />
                    <ServiceSection />
                    <Attività />
                    <Projects />
                    <Esperienza />
                    <Competenze />
                    <References />
                    <Courses />
                    <Prizes />
                    <Languages />
                    <Interests />
                    <Causes />
                  </Col>
                  <Col xs={12} md={5} lg={5} xl={4}>
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
          <Route
            path="/profilo/:id"
            element={
              <Container className="mainContainer">
                <Row className="gx-5">
                  <Col xs={12} md={7} lg={7} xl={8}>
                    <FirstCard />
                    <Informazioni />
                    <ServiceSection />
                    <Attività />
                    <Projects />
                    <Esperienza />
                    <Competenze />
                    <References />
                    <Courses />
                    <Prizes />
                    <Languages />
                    <Interests />
                    <Causes />
                  </Col>
                  <Col xs={12} md={5} lg={5} xl={4}>
                    <Aside title={"Altri profili per te"} button={"Segui"} />
                    <Aside title={"Persone che potresti conoscere"} button={"Aggiungi"} />
                    <AsidePage />
                  </Col>
                </Row>
                <Footer />
              </Container>
            }
          />
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
