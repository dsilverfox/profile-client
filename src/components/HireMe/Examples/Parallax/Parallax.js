import React from 'react';


//Parallax Imports
import { Parallax } from 'react-parallax'
import bgImage from './moon.jpg'
import bgImage2 from './rainbow.jpg'
import bgImage3 from './Cat.jpg'
import bgImage4 from './dog.jpg'
import bgImage5 from './sun.jpg'
import bgImage6 from './candy.jpg'


const ParallaxExample = () => {
    const inlineStyle = {
        background: 'black',
        left: '50%',
        top: '50%',
        position: 'absolute',
        padding: '20px',
        transform: 'translate(-50%, -50%',
    }
    return (
        <div>
            <Parallax bgImage={bgImage} strength={500}>
                <div style={{ height: 500 }}>
                    <div style={inlineStyle}>Annoy owner until he gives you food say meow repeatedly until belly rubs, feels good </div>
                </div>
            </Parallax>
            <h1>~~~~~~~~~</h1>
            <Parallax bgImage={bgImage2} strength={-200}>
                <div style={{ height: 500 }}>
                    <div style={inlineStyle}>Blow up sofa in 3 seconds.</div>
                </div>
            </Parallax>
            <h1>~~~~~~~~~</h1>
            <Parallax bgImage={bgImage3} strength={500}>
                <div style={{ height: 500 }}>
                    <div style={inlineStyle}>Mess up all the toilet paper show belly. </div>
                </div>
            </Parallax>
            <h1>~~~~~~~~~</h1>
            <Parallax bgImage={bgImage4} strength={-200}>
                <div style={{ height: 500 }}>
                    <div style={inlineStyle}>I love cats i am one wake up scratch humans leg for food then purr then i have a and relax.</div>
                </div>
            </Parallax>
            <h1>~~~~~~~~~</h1>
            <Parallax bgImage={bgImage5} strength={500}>
                <div style={{ height: 500 }}>
                    <div style={inlineStyle}>Naughty running cat throw down all the stuff in the kitchen.</div>
                </div>
            </Parallax>
            <h1>~~~~~~~~~</h1>
            <Parallax bgImage={bgImage6} strength={-200}>
                <div style={{ height: 500 }}>
                    <div style={inlineStyle}>Fish i must find my red catnip fishy fish hell is other people.</div>
                </div>
            </Parallax>
        </div>
    )
}

export default ParallaxExample;