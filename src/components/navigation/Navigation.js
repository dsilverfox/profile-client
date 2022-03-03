import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import MyLogo from '../../Assets/SilverfoxLogo.jpg';
import NavDropdown from 'react-bootstrap/esm/NavDropdown'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Navigation = () => {
    return (
        <div>
            <>
                <Container className="navbar" fluid>
                          <Nav >
                        <Col className="links">
                                <Link to="/aboutme" style={{ textDecoration: 'none', color: '#d87df6' }}>About Me</Link>
                            </Col>
                        <Col className="links">
                                <Link to="/projects" style={{ textDecoration: 'none', color: '#d87df6' }}>Projects</Link>
                            </Col>
                        <Col className="links">
                                <Link to="/resume" style={{ textDecoration: 'none', color: '#d87df6' }}>Resume</Link>
                            </Col>
                        <Col className="links">
                                <Link to="/writing" style={{ textDecoration: 'none', color: '#d87df6' }}>Writing</Link>
                            </Col>
                        <Col className="links">
                                <Link to="/contact" style={{ textDecoration: 'none', color: '#d87df6' }}>Contact Me</Link>
                            </Col>
                        <Col className="links">
                                <Link to="/hireme" style={{ textDecoration: 'none', color: '#d87df6' }}>Hire Me</Link>
                            </Col>
                        </Nav>
                </Container>
            </>
        </div>
    )
}
export default Navigation;
