import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand className='text-white'><img src={logo} width="120"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className='text-white' to="/">Home</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
