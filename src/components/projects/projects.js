import React  from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import CSSCreature from "../../Assets/CSSCreature.PNG"
import API1 from "../../Assets/API1.PNG"
import API2 from '../../Assets/API2.PNG'
import Blue from '../../Assets/Blue.jpg'
import Red from '../../Assets/Red.jpg'


const Projects = () => {

        return (
            <div className="projects">
                <CardGroup>
                    <Card bg='black' style={{ borderRadius: '3rem' }}>
                    <Card.Img variant="top" style={{height: '5rem'}} src={CSSCreature} />
                    <Card.Body>
                        <Card.Title>CSS Creature</Card.Title>
                        <Card.Text>
                                <p>CSS 3 to design & build a pure CSS creature</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                    <Card bg='black' style={{ borderRadius: '3rem' }}>
                        <Card.Img variant="top" style={{ height: '5rem' }} src={API1} />
                        <Card.Body>
                            <Card.Title>Random Generators</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>Used CSS, Bootstrap 5x, and Javascript to build a site that would allow writers, gamers and others who lose writing time --to researching random details-- to generate those details on demand.</li>
                                    <li>Made calls to third party APIs to gather details to be randomly provided.</li>
                                    <li>Created Mock API’s for additional details where an API did not exist previously.</li>
                                </ul>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card bg='black' style={{ borderRadius: '3rem' }}>
                        <Card.Img variant="top" style={{ height: '5rem' }} src={API2} />
                        <Card.Body>
                            <Card.Title>Random World Holidays</Card.Title>
                            <Card.Text>
                                <p>Used CSS, Bootstrap and Javascript to build a site that would pull a random holiday for a selected country and year.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card bg='black' style={{ borderRadius: '3rem' }}>
                        <Card.Img variant="top" style={{ height: '5rem' }} src={Blue} />
                        <Card.Body>
                            <Card.Title>Team Project</Card.Title>
                            <Card.Text>
                                <ul>
                                <li>Used CSS, Bootstrap, Javascript, React and Node.js to build a site with a team which enabled a user to search for a tropical fruit. Once they had found one, they were able to make notes about what they chose to grow. This was fully CRUD enabled</li>
                                <li>Worked with a team to create this project using GitHub for version management, pushed this project to Heroku both on server and client side.</li>
                                <li>Made 3rd party API calls to fetch plant data. Built our own Express database for notes.</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card bg='black' style={{ borderRadius: '3rem' }}>
                        <Card.Img variant="top" style={{ height: '5rem' }} src={Red} />
                        <Card.Body>
                            <Card.Title>See Your Story</Card.Title>
                            <Card.Text>
                                <ul>
                                <li>Used CSS, Bootstrap, TypeScript, React (Legacy), and Node.js to build a site which allows users to make notes about the stories they are writing and the characters they are using for each of those stories</li>
                                <li>The stories and characters sections were both fully CRUD capable.</li>
                                <li>Used React-Router-Dom v6 for navigation.</li>
                                <li>Implemented role based access which allowed admin users access to specific routes while protecting those routes from users.</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>

        )
}

export default Projects;