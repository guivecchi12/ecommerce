import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../CSS/header.css';

const Header = () =>{
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className='header'>
            <Container>
                <Navbar.Brand href="/"><span className='title'>Ecommerce</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/shop">Shop</Nav.Link>
                    <Nav.Link href="/cart">Cart</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;