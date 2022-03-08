import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

const Resume = () => {

    return (
        <div className="resume">
            <CardGroup className='resumeCards'>
                <Card bg='black' text='white'
                    style={{ borderRadius: '3rem' }}
                    className="resumeCard">
                    <Card.Header></Card.Header>
                    <Card.Body>
                        <Card.Title>Devon Silverfox-Patchett</Card.Title>
                        <Card.Text>
                                <p>DE.Silverfox.Coding@gmail.com</p>
                                <p>765-610-6134</p>
                                <p><a href="https://github.com/dsilverfox?tab=repositories">GitHub</a></p>
                                <p><a href="https://www.linkedin.com/in/devon-silverfox-patchett/">LinkedIn</a></p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card bg='black' text='white'
                    style={{ borderRadius: '3rem' }}
                    className="resumeCard">
                    <Card.Header></Card.Header>
                    <Card.Body>
                        <Card.Title> Objective: </Card.Title>
                        <Card.Text>
                            Highly creative web development specialist able to complete all aspects of front-end development. A meticulous coder with solid attention to detail and expert-written and oral communication skills. Able to program in various languages, and a lifelong learner,  dedicated to growing in skill level and expertise
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card bg='black' text='white'
                    style={{ borderRadius: '3rem' }}
                    className="resumeCard">
                    <Card.Header></Card.Header>
                    <Card.Body>
                        <Card.Title> Education </Card.Title>
                        <Card.Text>
                            <ul>
                                <p>Eleven Fifty Academy, Web Development Immersive Learning Program, Indianapolis, IN, February 24, 2022</p>
                                <p>CIW Advanced HTML5 and CSS certified.</p>
                                <p>About Eleven Fifty Academy</p>
                                <p>26-week immersive learning program for Web Development taught with industry-guided curriculum, real-world project-based learning, and 500+ hours of logged coding time and training.</p>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card bg='black' text='white'
                    style={{ borderRadius: '3rem' }}
                    className="resumeCard">
                    <Card.Header></Card.Header>
                    <Card.Body>
                        <Card.Title> Competencies & Functional Skills: </Card.Title>
                        <Card.Text>
                            Problem-solving, troubleshooting, creativity, visual communication, customer service, critical observation, and thinking, organization, learning, and education development, learning theory, Agile methodology, portfolio development, addressing and resolving business challenges
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card bg='black' text='white'
                    style={{ borderRadius: '3rem' }}
                    className="resumeCard">
                    <Card.Header></Card.Header>
                    <Card.Body>
                        <Card.Title> Technical Skills </Card.Title>
                        <Card.Text>
                                <p><strong>Languages/Libraries:</strong> <p>JavaScript, TypeScript, Node.js, React, Express, JWT, Bcrypt</p> </p>
                                <p><strong>Cloud Technologies:</strong> <p>Heroku, Firebase, GitHub </p></p>
                                <p><strong>CI/CD:</strong><p>Agile, Scrum, Git</p></p>
                                <p><strong>Databases/ORM:</strong><p>PostgreSQL, Sequelize</p></p>
                                <p><strong>Web Technologies:</strong><p>HTML, CSS, APIs, Responsive Web Design</p></p>
                                <p><strong>Styling Libraries:</strong><p>Bootstrap, Reactstrap</p></p>

                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
}

export default Resume;