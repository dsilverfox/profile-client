import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import ContactForm from './components/contacts';
import InProgress from "./components/InProgress"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<InProgress />}/>
            <Route path="/contact" element={<ContactForm/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
