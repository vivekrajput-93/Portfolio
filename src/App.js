
import './App.css';
import Nav from "./pages/Navbar/Nav"
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Skills from './pages/skills/Skills';
import Service from './pages/service/Service';
import Contact from './pages/Contact/Contact';



function App() {
  return (
    <div className="App">
    <Nav />
    <Home />
    <About />
    <Skills />
    <Service />
    <Contact />

    </div>
  );
}

export default App;
