import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col'


const Navigation = () => {
    return (
        <div>
            <>
                <Container className="navbar" fluid>
                          <Nav >
                        <Col className="links">
                                <h1><Link to="/aboutme" style={{ textDecoration: 'none', color: '#d87df6' }}>About Me</Link></h1>
                            </Col>
                        <Col className="links">
                               <h1> <Link to="/projects" style={{ textDecoration: 'none', color: '#d87df6' }}>Projects</Link></h1>
                            </Col>
                        <Col className="links">
                               <h1> <Link to="/resume" style={{ textDecoration: 'none', color: '#d87df6' }}>Resume</Link></h1>
                            </Col>
                        <Col className="links">
                            <h1>  <Link to="/writing" style={{ textDecoration: 'none', color: '#d87df6' }}>Writing</Link></h1>
                            </Col>
                        <Col className="links">
                                <h1><Link to="/contact" style={{ textDecoration: 'none', color: '#d87df6' }}>Contact Me</Link></h1>
                            </Col>
                        <Col className="links">
                               <h1> <Link to="/hireme" style={{ textDecoration: 'none', color: '#d87df6' }}>Hire Me</Link></h1>
                            </Col>
                        </Nav>
                </Container>
            </>
        </div>
    )
}
export default Navigation;
