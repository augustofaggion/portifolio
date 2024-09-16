import Home from './components/home';
import Navbar from './components/navbar';
import Project from './components/project';
import About from './components/about';
import Skills from './components/skills';
import Contact from './components/contact';
import Footer from './components/footer';

export default function App() {
  return (
    <>
    <Navbar />
    <Home />
    <Project />
    <About/>
    <Skills/>
    <Contact/>
    <Footer/>
    </>
  );
}
