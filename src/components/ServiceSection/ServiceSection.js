import React from "react";
import { Col, Container, Row ,Badge} from "react-bootstrap";
import imgService from "./../../assets/images/services.png";
import imgCars from "./../../assets/images/cars.png";
import imgRoad from "./../../assets/images/roadAssist.png";
import imgSpare from "./../../assets/images/spare.png";
import imgPlate from "./../../assets/images/plate.png";

export default function ServiceSection() {
    const services=[
        "AC Repair",
        "Carwash",
        "Oil Change",
        "Car Detailing",
        "Transmission Repair",
        "Car Inspection",
        "Car Engine Repair",
        "Car Maintenance"
    ]
    const cars=[
        "Buy Brand New Car",
        "Sell Your Car",
        "Buy Used Cars",
        "Export Cars",
        "Import Cars",
        "Compare Models",
        "Luxury Cars",
        "Off-road Cars",
        "Motor Bikes"
    ]
    const roadAssist=[
        "Find the best professional Road assist on your location"
    ]
    const spares=[
        "Suspension",
        "Axle",
        "Battery",
        "Gear Stick",
        "Engine",
        "Wheels"
    ]
    const plates=[
        "Select from different plate numbers available from the best sellers"
    ]
  return (
    <div className="py-5" id="services">
      <h2 className="text-center">What do you get by a single app?</h2>
      <Container>
        <Row>
          <Col>
            <img
              src={imgService}
              alt="Different car services provided by Liwa Motors"
              className="w-100"
            />
          </Col>
          <Col className="my-auto">
            <h6 className="text-center">All types of car services including but not limited to</h6>
            <Row>
                {services.map((item,idx)=>{
                    return (
                        <Col lg={4} key={idx} className="my-1">
                            <Badge  bg="secondary" className="text-dark w-100 py-3 btn-badge">{item}</Badge>
                        </Col>
                    )
                })}
            </Row>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          
          <Col className="my-auto">
            <h6 className="text-center">Want to buy a new car? Or replace your car with another?</h6>
            <Row>
                {cars.map((item,idx)=>{
                    return (
                        <Col lg={4} key={idx} className="my-1">
                            <Badge  bg="secondary" className="text-dark w-100 py-3 btn-badge">{item}</Badge>
                        </Col>
                    )
                })}
            </Row>
          </Col>
          <Col>
            <img
              src={imgCars}
              alt="Buy / Sell your car from the best sellers in Liwa Motors"
              className="w-100"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
        <Col>
            <img
              src={imgRoad}
              alt="Get service from professionals in any road in Dubai from  Liwa Motors"
              className="w-100"
            />
          </Col>
          <Col className="my-auto">
            <h6 className="text-center">Stuck in the road and need assistance? </h6>
            <Row>
                {roadAssist.map((item,idx)=>{
                    return (
                        <Col  key={idx} className="my-1">
                            <Badge  bg="secondary" className="text-dark w-100 py-3 btn-badge">{item}</Badge>
                        </Col>
                    )
                })}
            </Row>
          </Col>
          
        </Row>
      </Container>
      <Container>
        <Row>
          
          <Col className="my-auto">
            <h6 className="text-center">All types of car parts available from your location</h6>
            <Row>
                {spares.map((item,idx)=>{
                    return (
                        <Col lg={4} key={idx} className="my-1">
                            <Badge  bg="secondary" className="text-dark w-100 py-3 btn-badge">{item}</Badge>
                        </Col>
                    )
                })}
            </Row>
          </Col>
          <Col>
            <img
              src={imgSpare}
              alt="Buy / Sell your car from the best sellers in Liwa Motors"
              className="w-100"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
        <Col>
            <img
              src={imgPlate}
              alt="Buy / Sell your car from the best sellers in Liwa Motors"
              className="w-100"
            />
          </Col>
          <Col className="my-auto">
            <h6 className="text-center">Want to have the most luxurious number for your car?</h6>
            <Row>
                {plates.map((item,idx)=>{
                    return (
                        <Col  key={idx} className="my-1">
                            <Badge  bg="secondary" className="text-dark w-100 py-3 btn-badge">{item}</Badge>
                        </Col>
                    )
                })}
            </Row>
          </Col>
          
        </Row>
      </Container>
    </div>
  );
}
