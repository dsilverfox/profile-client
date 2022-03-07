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
                            <p>In March of 2020 my husband offered me the opportunity of a lifetime. He would continue to work while I used the next
                                few years to focus on making my dreams come true. I started by spending a year focusing on nothing by my fiction writing
                                with the goal of releasing a story in 2021. I completed that goal September 20, 2021. That brought me to my next goal.
                                What exactly did I want to do in order to be able to contribute to society and still be creative and work on my writing.
                            </p>

                            <p>The decision came late one August night. I was talking on messenger to my editor about what we were doing to finalize
                                the advertising on my book. It was then that he asked if I had a website.</p>

                            <p>This started the daunting process of looking into how to create a website. I am meticulous. I have a way I want
                                things to look, act and respond and I am going to find a way to make that happen. Trial an error informed me that I
                                was not going to be able to make that happen the way I wanted using drag and drop site templates. At least not
                                without some other knowledge.
                            </p>

                            <p>Enter web development. There are hundreds of thousands, perhaps millions of sites that purport to teach you all sorts
                                of languages from scratch. Too many. It was overwhelming looking at the information available. I just didn't know
                                where to begin. That hunt eventually led me to Eleven Fifty Academy.</p>
                        </section>
                    </Col>
                </Row>
            </main>
        </Container>
    )
}

export default AboutMe;