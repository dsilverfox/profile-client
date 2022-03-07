import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Anthology from '../../Assets/Anthology.jpg';

const Writing = () => {

    return (
        <div className="writing">
            <p>In addition to my work in web design I also write under Avery Graycastle</p>
            <Row>
            <Col className="Description">
            <p>On September 20, 2021 I published my first short story in an anthology titled Shadows Redefined.</p>
            </Col>

            <Col className="Images">
                <img src={Anthology} alt="Cover of Shadows Redefined as found on Amazon.com" />
                <a href="https://www.amazon.com/Shadows-Redefined-Passion-Literary-Anthology-ebook/dp/B09DBS6TNR/ref=sr_1_1?crid=28X39G4PTSTRT&keywords=Shadows+Redefined&qid=1646687084&sprefix=shadows+redefined%2Caps%2C163&sr=8-1"><h1>Buy Now</h1></a>
            </Col>
            </Row>
        </div>
    )
}

export default Writing;