import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import  "../styles/layout.css"


export default function Navbar1() {
    return (
          
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <div className="navName" >
      <Navbar.Brand > <Link className="navLink" to= {"/"} >Existential T-shirts</Link></Navbar.Brand>
      </div>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {/* I added these two */}
        <Link className="nav-link" to={"/CheckOut"} >Check-out</Link>
        <Link className="nav-link" to={"/Shop"} >Shop</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
}
