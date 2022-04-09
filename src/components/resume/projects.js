import React  from 'react';
import {Container, Row, Col} from 'react-bootstrap'

import CSSCreature from './projectcards/CSSCreature'
import API1 from './projectcards/API1'
import API2 from './projectcards/API2'
import Blue from './projectcards/Blue'
import Red from './projectcards/Red'


const Projects = () => {
    const styles = {
        card: {
            border: '1px solid #eeeeee',
            borderRadius: '3px',
            padding: '15px',
            width: '285px',
            height: '800px'
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
           {/* Project 1: */}
            <section className="projects-section">
                <CSSCreature styles={styles} />
            </section>
            </Col>
            <Col>
            {/* Project 2: */}
            <section className="projects-section">
                <API1 styles={styles} />
            </section>
            </Col>
            <Col>
            {/* Project: 3 */}
            <section className="projects-section">
                <API2 styles={styles} />
            </section>
            </Col>
                <Col>
                    {/* Project: 4 */}
                    <section className="projects-section">
                        <Blue styles={styles} />
                    </section>
                </Col>
                <Col>
                    {/* Project: 5 */}
                    <section className="projects-section">
                        <Red styles={styles} />
                    </section>
                </Col>

        </Row>
        </Container>
    );
};

export default Projects;