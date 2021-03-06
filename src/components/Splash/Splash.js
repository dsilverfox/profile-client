import React from 'react';


//Parallax Imports
import { Parallax } from 'react-parallax'
import bgImage from '../../Assets/AboutBG.jpg'
import bgImage2 from '../../Assets/PortfolioBG.jpg'
import bgImage3 from '../../Assets/ResumeBG.jpg'
import bgImage4 from '../../Assets/WritingBG.jpg'
import bgImage5 from '../../Assets/ContactBG.jpg'
import bgImage6 from '../../Assets/HireBG.jpg'


const Splash = () => {
    const inlineStyle = {
        background: 'black',
        left: '50%',
        top: '50%',
        position: 'absolute',
        padding: '20px',
        transform: 'translate(-50%, -50%',
    }
    return(
        <div>
          <Parallax bgImage={bgImage} strength={500}>
          <div style={{height: 500}}>
          <div style={inlineStyle}>A little about me and why I chose Web Development</div>
          </div>
        </Parallax>
         <h1>~~~~~~~~~</h1>
        <Parallax bgImage={bgImage2} strength={-200}>
          <div style={{ height: 500 }}>
            <div style={inlineStyle}>Explanations of the projects I have completed and the technologies used therein.</div>
          </div> 
        </Parallax>
        <h1>~~~~~~~~~</h1>
        <Parallax bgImage={bgImage3} strength={500}>
          <div style={{ height: 500 }}>
            <div style={inlineStyle}>The five most important pieces of my resume.</div>
          </div>
        </Parallax>
        <h1>~~~~~~~~~</h1>
        <Parallax bgImage={bgImage4} strength={-200}> 
          <div style={{ height: 500 }}>
            <div style={inlineStyle}>The writing I have published in physical form.</div>
          </div>
        </Parallax>
        <h1>~~~~~~~~~</h1>
        <Parallax bgImage={bgImage5} strength={500}>
          <div style={{ height: 500 }}>
            <div style={inlineStyle}>A form you can use to contact me with further questions.</div>
          </div>
        </Parallax>
        <h1>~~~~~~~~~</h1>
        <Parallax bgImage={bgImage6} strength={-200}> 
          <div style={{ height: 500 }}>
            <div style={inlineStyle}>A page offering examples of template sites for other creatives. It includes a form to contact me to start a freelance contract.</div>
          </div>
        </Parallax>
        </div>
    )
}

export default Splash;