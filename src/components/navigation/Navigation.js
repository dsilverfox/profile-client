import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import MyLogo from '../../Assets/SilverfoxLogo.jpg';

const Navigation = () =>{
    return(
        <div>
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                           <Link to="/"> <img
                                alt="Silverfox Standard Logo"
                                src={MyLogo}
                                width="60"
                                height="100"
                                className="Logo"
                            /></Link>{' '}
                            Portfolio: Devon Silverfox-Patchett
                        </Navbar.Brand>
                        <Nav>
                            <NavLink>
                                <Link to="/aboutme">About Me</Link>
                            </NavLink>
                            <NavLink>
                                <Link to="/projects">Projects</Link>
                            </NavLink>
                            <NavLink>
                                <Link to="/resume">Resume</Link>
                            </NavLink>
                            <NavLink>
                                <Link to="/writing">My Writing</Link>
                            </NavLink>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        </div>
    )
}
export default Navigation;
