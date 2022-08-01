import React from "react";
import { Container } from "react-bootstrap";
import logo from "./../../assets/images/logo.png";
import main from "./../../assets/images/mainImage.png";
export default function MainSection() {
  return (
    <Container className="py-5">
      <div className="d-flex">
        <img src={logo} alt="Download Liwa Motors" width={124} />
        <div className="my-auto px-3">
          <p className="my-0 py-0">Liwa Motors Presents</p>
          <h1 style={{ letterSpacing: "0.2px", fontWeight: "900" }}>
            <b>All Your Cars Need In Your Pocket</b>
          </h1>
        </div>
      </div>
      <Container >
      <img src={main} alt="Liwa motors is a categorised application available for android and IOS devices" className="w-100"/>
      </Container>
    </Container>
  );
}
