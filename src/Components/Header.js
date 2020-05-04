import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
        
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Covid -19 Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/india">India</Link>
            <Link to="/world">World</Link>
          </Nav>
        
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Header;
