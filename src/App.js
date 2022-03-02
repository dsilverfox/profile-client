import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
//Material UI Imports
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

//Page Imports
import ContactForm from './components/contacts/contacts';
import Footer from "./components/footer/footer";
import InProgress from "./components/InProgress/InProgress";
import Navigation from "./components/navigation/Navigation";
import AboutMe from "./components/aboutme/aboutme";
import Projects from "./components/projects/projects";
import Resume from "./components/projects/projects";
import Writing from "./components/writing/writing";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <Navigation/>
          <Routes>
            <Route path="/" element={<InProgress />}/>
            <Route path="/contact" element={<ContactForm/>}/>
            <Route path="/aboutme" element={<AboutMe/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/resume" element={<Resume/>}/>
            <Route path="/writing" element={<Writing/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
