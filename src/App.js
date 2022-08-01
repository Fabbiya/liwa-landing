import "./App.css";
import Menu from "./components/Menu/Menu";
import MainSection from "./components/MainSection/MainSection";
import DownloadBar from "./components/DownloadBar/DownloadBar";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import SupportSection from "./components/SupportSection/SupportSection";
import { Col, Row } from "react-bootstrap";

function App() {
  return (
    <div>
      <Menu />
      <MainSection />
      <DownloadBar />
      <ServiceSection />
      <SupportSection />
      <footer className="bg-secondary">
        <Row>
          <Col lg={6}>
            <p className="text-center my-0 py-0"><small>All rights reserved for Dar Al Khayam General Trading LLC</small></p>
          </Col>
          <Col lg={6}>
            <p className="text-center my-0 py-0"><small>Designed and developed by @webdevelopmentuae.com</small></p>
          </Col>
        </Row>
      </footer>
    </div>
  );
}

export default App;
