import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
 // Importa el archivo CSS de Bootstrap

export default function Navigation() {
  return (
    <Navbar class="navbar" bg='dark' variant='dark' expand='lg'>
        <Navbar.Brand href="#home">Piz4</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <NavLink to="/cursos" className="nav-link" activeClassName="active">Cursos</NavLink>
        <NavLink to="/aportes" className="nav-link" activeClassName="active">Aportes a Open Source</NavLink>
        <NavLink to="/habilidades" className="nav-link" activeClassName="active">Habilidades</NavLink>
        <NavLink to="/idiomas" className="nav-link" activeClassName="active">Idiomas</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}