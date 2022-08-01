import React from "react";
import imgSupport from "./../../assets/images/supports.png";
import googlePlay from "./../../assets/images/googlePlay.png";
import appstore from "./../../assets/images/appstore.png";
import { Container, Row, Col } from "react-bootstrap";

export default function SupportSection() {
  return (
    <div
      style={{ backgroundImage: `url(${imgSupport})` , backgroundSize:"cover", display: "block" , minHeight:"100vh", verticalAlign:"middle"}}
      className=" w-100 py-5"
      id="support"
    >
      <Container style={{height:"30vh"}}>
        <Row>
          <Col lg={7}></Col>
          <Col lg={5} className="py-5 my-auto">
            <div>
              <h2 className="text-center">Do you have any question?</h2>
              <p className="text-center">Talk to our professional support team to get best result</p>
            </div>
            <div className="d-flex">
              <img
                src={googlePlay}
                alt="Download from google play"
                className="img-fluid ms-auto me-2 ms-auto"
                style={{ maxWidth: "276px" }}
              />
              <img
                src={appstore}
                alt="Download from appstore"
                className="img-fluid me-0"
                style={{ maxWidth: "276px" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
