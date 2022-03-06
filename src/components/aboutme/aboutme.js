import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AboutMeIMG from "../../Assets/AboutMe.jpg"


const AboutMe = () => {

    return (
        <Container fluid>
            <main>
                <Row>
                    <Col>
                        <section className='photo'>
                           <img width='600' height='900' src={AboutMeIMG} alt="Devon Silverfox in her home office."/>
                        </section>
                    </Col>
                    <Col>
                        <section className='story'>
                            I will hold the about me story.
                        </section>
                    </Col>
                </Row>
            </main>
        </Container>
    )
}

export default AboutMe;