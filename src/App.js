import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { AnimatePresence } from "framer-motion";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AnimatePresence>
      <section className="relative min-h-screen w-full dark:bg-gradient-to-br from-slate-950 to-gray-800 bg-slate-200 scroll-smooth">
        <Home />
        <NavBar />
        <About />
        <Skills />
        <div className=" w-full max-w-7xl mx-auto">
          <Projects />
        </div>
        <div className=" w-full max-w-7xl mx-auto">
            <Contact/>
        </div>
      </section>
      <ToastContainer/>
    </AnimatePresence>
  );
}

export default App;
