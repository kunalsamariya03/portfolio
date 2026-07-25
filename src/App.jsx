import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import SkillTree from "./components/SkillTree.jsx";
import Projects from "./components/Projects.jsx";
import Achievements from "./components/Achievements.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-navy text-slate-200 font-sans relative">
      <div className="pointer-events-none fixed inset-0 bg-grain z-0" />
      <div className="relative z-10">
        <Nav />
        <Hero />
        <About />
        <SkillTree />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
