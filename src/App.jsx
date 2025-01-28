import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CompetitiveProgramming from "./components/CompetitiveProgramming";

const App = () => {
  return (
    <div className="overflow-x-hidden antialiased text-cyan-500 selection:bg-cyan-300 selection:">
      <div className="fixed top-0 w-full h-full -z-10">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container px-8 mx-auto">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <CompetitiveProgramming />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
