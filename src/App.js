
import './App.css';
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import {Routes , Route } from 'react-router-dom';
import Navbar from './pages/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      
    </div>
  );
}

export default App;
