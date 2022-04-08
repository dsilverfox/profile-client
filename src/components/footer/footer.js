import React from 'react';
import {Link} from 'react-router-dom'
import {Col, Container, Row} from 'react-bootstrap'

const Footer = () => {

    return (
        <div className="footer">
            <Container className="lowerNav" fluid>
                <Row>
            <Col className="links">
            <h1><Link to="/" style={{ textDecoration: 'none', color: '#d87df6' }}>Home</Link></h1>
            </Col>
                <Col className="links">
            <h1><Link to="/certification" style={{ textDecoration: 'none', color: '#d87df6'}}>Certifications</Link></h1>
            </Col>
                <Col className="links">
            <h1><a style={{ textDecoration: 'none', color: '#d87df6'}} href="https://docs.google.com/document/d/14rBgYYtoOI6CCpZkK3Khsp8ErdOGxJ1d/edit?usp=sharing&ouid=113737866647134835732&rtpof=true&sd=true">Download Resume</a></h1>
            </Col>
                </Row>
                <Row>
                    <p>Copyright© 2022 Devon Silverfox-Patchett</p>
                </Row>
            </Container>
           
        </div>
    )
}

export default Footer;