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
import Certification from "./components/certifications/certifications"

//Site Examples
import Glass from './components/HireMe/Examples/Glass/Glass'
import Parallax from './components/HireMe/Examples/Parallax/Parallax'


function App() {

 

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
          <Routes>
            <Route path="/" element={<Splash/>}/>
            <Route path="/contact" element={<ContactForm/>}/>
            <Route path="/aboutme" element={<AboutMe/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/resume" element={<Resume/>}/>
            <Route path="/writing" element={<Writing/>}/>
            <Route path="/hireme" element={<HireMe/>}/>
            <Route path="/certification" element={<Certification/>}/>
            <Route path="/glass" element={<Glass/>}/>
            <Route path="/parallax" element={<Parallax/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
