
import './App.css';
import Nav from "./pages/Navbar/Nav"
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Skills from './pages/skills/Skills';


function App() {
  return (
    <div className="App">
    <Nav />
    <Home />
    <About />
    <Skills />
    </div>
  );
}

export default App;
