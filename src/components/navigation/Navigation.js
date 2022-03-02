import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/SilverfoxLogo.jpg';

const Navigation = () =>{
    return(
        <div>
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                alt="Silverfox Standard Logo"
                                src={Logo}
                                width="60"
                                height="100"
                                className="Logo"
                            />{' '}
                            Portfolio: Devon Silverfox-Patchett
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </>
        </div>
    )
}
export default Navigation;
