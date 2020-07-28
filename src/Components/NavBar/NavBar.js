import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import './NavBar.css'

const NavBar = () =>{
  return(
      <Navbar bg="light" expand="lg" className='sticky-top py-0'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="mr-auto mt-0" style={{display:"flex", justifyContent:'center', width:'100%'}}>
          <Nav.Link href="/" className='ml-3 pr-4 border-right'>Home</Nav.Link>
          <Nav.Link href="/about" className='ml-3 pr-4 border-right'>About</Nav.Link>
            <NavDropdown title="What We Offer" id="basic-nav-dropdown" className='ml-3 pr-4 border-right'>
              <NavDropdown.Item href="/sensoryPlayGroup">Sensory Play Group Classes</NavDropdown.Item>
              <NavDropdown.Item href="/vestibularFreePlay">Vestibular Free Play</NavDropdown.Item>
              <NavDropdown.Item href="/storyTime">Story Time</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/pricing">Schedule and Pricing</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact" className='ml-3'>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
}

export default NavBar