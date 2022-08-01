import React from "react";
import imgSupport from "./../../assets/images/supports.png";
import googlePlay from "./../../assets/images/googlePlay.png";
import appstore from "./../../assets/images/appstore.png";
import { Container, Row, Col } from "react-bootstrap";

export default function SupportSection() {
  return (
    <div
      style={{ backgroundImage: `url(${imgSupport})` , backgroundSize:"cover", display: "block" , minHeight:"100vh", verticalAlign:"middle", backgroundPosition:"center"}}
      className=" w-100 py-5"
      id="support"
    >
 
      <Container style={{marginTop:"30vh"}}>
        <Row>
          <Col lg={7}></Col>
          <Col lg={5} className="py-5 my-auto">
            <div>
              <h2 className="text-center text-light">Do you have any question?</h2>
              <p className="text-center text-light">Talk to our professional support team to get best result</p>
            </div>
            <Container>
              <Row>
                <Col>
                <img
                src={googlePlay}
                alt="Download from google play"
                className="img-fluid ms-auto me-2 ms-auto"
             
              />
              
                </Col>
                <Col >
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
