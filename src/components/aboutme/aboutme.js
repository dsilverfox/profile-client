import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const AboutMe = () => {

    return (
        <Container fluid>
            <main>
                <Row>
                    <Col>
                        <section className='photo'>
                            I will hold the profile photo.
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