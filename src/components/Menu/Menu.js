import React from 'react'
import Container from 'react-bootstrap/Container';
import {Navbar,Nav} from 'react-bootstrap';
import logoText from './../../assets/images/liwaLogo.png'
export default function Menu() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={logoText} alt="Liwa motors - the most wanted app in UAE" width={200}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link href="#services" className='text-primary text-center'>Services</Nav.Link>
           <Nav.Link href="#support" className='text-primary text-center'>Support</Nav.Link>
            
             <Nav.Link href="#download" className='btn-download px-4 text-light ms-2 text-center' >
               Download
             </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
