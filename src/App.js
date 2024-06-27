import Navbar from "./components/Navbar";
import Home from "./components/Home";

import "./App.css"
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
  return (
    <div >
   
     <Navbar />
     <Home />
     <About />
     <Projects />
     <Contact />
    </div>
  );
}

export default App;
