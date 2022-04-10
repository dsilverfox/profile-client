import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

import Contact from './resumecards/Contact'
import Objective from './resumecards/Objective'
import Education from './resumecards/Education'
import Functional from './resumecards/Functional'
import Technical from './resumecards/Technical'
import Work from './resumecards/Work'


const Resume = () => {
    const styles = {
        card: {
            border: '1px solid #eeeeee',
            padding: '0.938rem',
            borderRadius: '50%',
            width: '30rem',
            height: '30rem',
            margin: '0.313rem',
        },

        image: {
            height: '200px',
            width: '250px'
        },
    };

    return (
        <Container fluid className="resumeCards">
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
                <Col>
                    {/* Technical */}
                    <section className="Resume-section">
                        <Work styles={styles} />
                    </section>
                </Col>
            </Row>
        </Container>
    );
};

export default Resume;