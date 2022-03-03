import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import MyLogo from '../../Assets/SilverfoxLogo.jpg';
import NavDropdown from 'react-bootstrap/esm/NavDropdown'

const Navigation = () => {
    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark">
                    <Container fluid>
                        <Navbar.Brand href="/">
                            <img
                                alt="Silverfox Standard Logo"
                                src={MyLogo}
                                width="60"
                                height="100"
                            />{' '}
                            Devon Silverfox-Patchett
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-dark-example" />
                        <Nav>
                            <Navbar.Collapse id="navbar-dark-example">
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Pages"
                                    menuVariant="dark"
                                >
                                    <NavDropdown.Item><Link to="/aboutme" style={{ textDecoration: 'none', color: '#d87df6'}}>About Me</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/projects" style={{ textDecoration: 'none', color: '#d87df6' }}>Projects</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/resume" style={{ textDecoration: 'none', color: '#d87df6' }}>Resume</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/writing" style={{ textDecoration: 'none', color: '#d87df6' }}>Writing</Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item><Link to="/contact" style={{ textDecoration: 'none', color: '#d87df6' }}>Contact Me</Link></NavDropdown.Item>
                                </NavDropdown>
                            </Navbar.Collapse>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        </div>
    )
}
export default Navigation;
