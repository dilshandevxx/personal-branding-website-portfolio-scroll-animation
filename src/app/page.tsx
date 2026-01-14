import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen">
      {/* 
        Scroll Container: 
        We use a wrapper with huge height (500vh) to define the scroll distance. 
      */}
      <div className="relative h-[500vh]">
        <Navbar />
        {/* Sticky Canvas stays fixed while we scroll through the 500vh container */}
        <ScrollyCanvas />
        
        {/* Overlay text elements mapped to scroll position */}
        <Overlay />
      </div>

      {/* Projects section appears after the scroll sequence finishes */}
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
