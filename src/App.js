import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//Material UI Imports
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

//Page Imports
import ContactForm from './components/contacts/contacts';
import Footer from "./components/footer/footer";
import Splash from "./components/Splash/Splash";
import Navigation from "./components/navigation/Navigation";
import AboutMe from "./components/aboutme/aboutme";
import Projects from "./components/projects/projects";
import Resume from "./components/resume/resume";
import Writing from "./components/writing/writing";
import HireMe from "./components/HireMe/HireMe"

//Parallax Imports
import {Parallax} from 'react-parallax'
import bgImage from './Assets/AboutBG.jpg'
import bgImage2 from './Assets/PortfolioBG.jpg'
import bgImage3 from './Assets/ResumeBG.jpg'
import bgImage4 from './Assets/WritingBG.jpg'
import bgImage5 from './Assets/ContactBG.jpg'
import bgImage6 from './Assets/HireBG.jpg'

function App() {

  const inlineStyle = {
    background: 'black',
    left: '50%',
    top: '50%',
    position: 'absolute',
    padding: '20px',
    transform: 'translate(-50%, -50%',
  }

  return (
    <div className="App">
      <BrowserRouter>
          <Navigation/>
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

          <Routes>
            <Route path="/" element={<Splash />}/>
            <Route path="/contact" element={<ContactForm/>}/>
            <Route path="/aboutme" element={<AboutMe/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/resume" element={<Resume/>}/>
            <Route path="/writing" element={<Writing/>}/>
            <Route path="/hireme" element={<HireMe/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
