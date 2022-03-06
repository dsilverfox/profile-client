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
          <div style={inlineStyle}>Synopsis of About Me</div>
          </div>
        </Parallax>
         <h1>~~~~~~~~~</h1>
        <Parallax bgImage={bgImage2} strength={-200}>
          <div style={{ height: 500 }}>
            <div style={inlineStyle}>Synopsis of Projects</div>
          </div> 
        </Parallax>
        <h1>~~~~~~~~~</h1>
        <Parallax bgImage={bgImage3} strength={500}>
          <div style={{ height: 500 }}>
            <div style={inlineStyle}>Synopsis of Resume</div>
          </div>
        </Parallax>
        <h1>~~~~~~~~~</h1>
        <Parallax bgImage={bgImage4} strength={-200}> 
          <div style={{ height: 500 }}>
            <div style={inlineStyle}>Synopsis of Writing</div>
          </div>
        </Parallax>
        <h1>~~~~~~~~~</h1>
        <Parallax bgImage={bgImage5} strength={500}>
          <div style={{ height: 500 }}>
            <div style={inlineStyle}>Synopsis of Contact Me</div>
          </div>
        </Parallax>
        <h1>~~~~~~~~~</h1>
        <Parallax bgImage={bgImage6} strength={-200}> 
          <div style={{ height: 500 }}>
            <div style={inlineStyle}>Synopsis of Hire Me</div>
          </div>
        </Parallax>
        </div>
    )
}

export default Splash;