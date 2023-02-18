import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../img/favicon.png'

export default function NavbarComponent() {

    return (
        <Navbar bg="light" expand="sm" >
            <Navbar.Brand as={Link} to="/" className="m-3 flex-grow-1">
                <img src={logo} alt="logo"></img>Delunico Drive
            </Navbar.Brand>
            <Nav>
                <Nav.Link as={Link} to="/user" className="m-3">
                    Profile
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}
