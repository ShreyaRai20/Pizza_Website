import './App.css';
import Navbar from "./components/navbar.js";
import Footer from "./components/Footer.js";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home.js';
import Menu from './pages/Menu.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/menu" element = {<Menu />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/contact" element = {<Contact />} />
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
