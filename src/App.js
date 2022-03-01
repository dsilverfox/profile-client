import './App.css';
import ContactForm from './components/contacts';
import InProgress from "./components/InProgress"

function App() {
  return (
    <div className="App">
      <InProgress/>
      <ContactForm/>
    </div>
  );
}

export default App;
