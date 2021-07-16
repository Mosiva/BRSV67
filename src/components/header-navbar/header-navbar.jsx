import React from 'react';
import { Navbar, Nav, NavDropdown, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function Header() {
  return (
 
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">BRSV</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/direction">Directions</Nav.Link>
          <NavDropdown title="Developers" id="collasible-nav-dropdown" >
            <NavDropdown.Item as={Link} to="/developers">Developers</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/frontenddeveloper">Frontend</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/testerdeveloper">Tester</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/backenddeveloper">Backend</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/systemadmindeveloper">System Adminstration</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/graphicdesigndeveloper" >Graphic Designer</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/promassking">PROMASSKING</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar >

  )
}

export default Header;