import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

import Contact from './resumecards/Contact'
import Objective from './resumecards/Objective'
import Education from './resumecards/Education'
import Functional from './resumecards/Functional'
import Technical from './resumecards/Technical'


const Resume = () => {
    const styles = {
        card: {
            border: '1px solid #eeeeee',
            padding: '15px',
            borderRadius: '50%',
            width: '600px',
            height: '600px',
            margin: '5px',
        },

        card2: {
            border: 'none',
            padding: '15px',
            borderRadius: '50%',
            width: '600px',
            height: '600px',
            margin: '5px',
        },

        image: {
            height: '200px',
            width: '250px'
        },
    };

    return (
        <Container fluid>
            <Row>
                <Col>
                    {/* Contact */}
                    <section className="Resume-section">
                        <Contact styles={styles} />
                    </section>
                </Col>
                <Col>
                    {/* Objective */}
                    <section className="Resume-section">
                        <Objective styles={styles} />
                    </section>
                </Col>
                <Col>
                    {/* Education */}
                    <section className="Resume-section">
                        <Education styles={styles} />
                    </section>
                </Col>
                <Col>
                    {/* Functional */}
                    <section className="Resume-section">
                        <Functional styles={styles} />
                    </section>
                </Col>
                <Col>
                    {/* Technical */}
                    <section className="Resume-section">
                        <Technical styles={styles} />
                    </section>
                </Col>
            </Row>
        </Container>
    );
};

export default Resume;