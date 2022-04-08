import {Carousel} from 'react-bootstrap'
import CIW from '../../Assets/CIW.jpg'
import FCC from '../../Assets/FCC-RWS.jpg'
import Gold from '../../Assets/Gold.jpg'
import BlueBadge from '../../Assets/BlueBadge.jpg'
import RedBadge from '../../Assets/RedBadge.jpg'
import Graduate from '../../Assets/Graduate.jpg'

const Certifications = () => {
    return(
    <Carousel className ="carousel" fade>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={Gold}
                alt="Web Development Gold Badge"
            />
            <Carousel.Caption className="sr-only">
                <h3>Web Development Gold Badge</h3>
                <p>Earners of Web Development Gold Badge have learned the fundamentals of front-end web design with HTML, CSS, and JavaScript. Students pull data from APIs, manipulate the DOM, create repositories in Github, and begin to deploy webpages.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={BlueBadge}
                alt="Web Development Blue Badge"
            />

                <Carousel.Caption className="sr-only">
                <h3>Web Development Blue Badge</h3>
                <p>The earners of the Web Development Blue Badge learn how to build faster more performant front ends with React and React capable libraries. They start to build servers using Node and Express with Sequelize as an ORM to a PostgreSQL database. They build their first full stack application with these pieces. In this project they also work with a team, each assigned a specific set of endpoints to create so that they learn to ensure that their code works with a development teams code.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={RedBadge}
                alt="Web Development Red Badge"
            />

                <Carousel.Caption className="sr-only">
                <h3>Web Development Red Badge</h3>
                <p>The earners of JavaScript Red Badge work within a group setting with Agile methodology to create a larger full-stack project. They begin to use TypeScript and add additional features to their Node servers. This is the students solo full stack application.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={Graduate}
                alt="Web Development Graduate"
            />

                <Carousel.Caption className="sr-only">
                <h3>Eleven Fifty Academy Graduate</h3>
                <p>The graduation badge shows the candidate has successfully moved through all badges (phases) of Eleven Fifty Academy's program for the specific language/skill in which they have learned (JavaScript, Python, .NET, or Cybersecurity).</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={CIW}
                alt="CIW Advanced HTML5 and CSS3 Specialist"
            />

                <Carousel.Caption className="sr-only">
                <h3>CIW Advanced HTML5 and CSS3 Specialist</h3>
                <p>Certification provided via CIW in HTML5 and CSS3.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={FCC}
                alt="Free Code Camp - Responsive Web Design"
            />

                <Carousel.Caption className="sr-only">
                <h3>Free Code Camp - Responsive Web Design</h3>
                <p>Designed un-styled site templates to meet requirements for the RWS certification.</p>
            </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
            <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
            />

            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
            />

            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item> */}
    </Carousel>
    )
}

export default Certifications;