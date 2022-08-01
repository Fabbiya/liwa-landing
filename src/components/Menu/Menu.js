import React from 'react'
import Container from 'react-bootstrap/Container';
import {Navbar,Nav} from 'react-bootstrap';
import logoText from './../../assets/images/liwaLogo.png'
export default function Menu() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logoText} alt="Liwa motors - the most wanted app in UAE" width={200}/>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#services" className='text-primary'>Services</Nav.Link>
            <Nav.Link href="#support" className='text-primary'>Support</Nav.Link>
            
            <Nav.Link href="#download" className='btn-download px-4 text-light ms-2' >
              Download
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
