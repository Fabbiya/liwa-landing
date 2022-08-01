import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import googlePlay from "./../../assets/images/googlePlay.png";
import appstore from "./../../assets/images/appstore.png";
export default function DownloadBar() {
  return (
    <div className="bg-primary py-2" id="download">
      <Container>
        <Row>
          <Col className="my-auto" lg={6}>
            <h5 className=" text-light ">
              Download the most wanted app for all types of car services
            </h5>
          </Col>
          <Col className="me-0 pe-0" lg={6}>
            <Container>
              <Row>
                <Col>
                <img
              src={googlePlay}
              alt="Download from google play"
              className="img-fluid ms-auto me-2 ms-auto"
              
            />
                </Col>
                <Col>
                <img
              src={appstore}
              alt="Download from appstore"
              className="img-fluid me-0"
             
            />
                </Col>
              </Row>
            </Container>
            
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}
