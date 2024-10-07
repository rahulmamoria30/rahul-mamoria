import HomePage from "@/components/Home/home";
import MySkills from "@/components/Skills/MySkills";
import Experience from "@/components/Experience/Experience";
import AboutPage from "./about";
import ProjectsPage from "./projects";
import CertificatePage from "./certificates";
import ContactPage from "./contact-me";
import { useRef } from "react";

export default function Home() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <main>
        <section id="home">
          <HomePage aboutRef={aboutRef} contactRef={contactRef} />
        </section>
        <hr /> {/* Horizontal line after Home section */}
        
        <section id="about" ref={aboutRef}>
          <AboutPage />
        </section>
        <hr /> {/* Horizontal line after About section */}

        <section id="skills">
          <MySkills />
        </section>
        <hr /> {/* Horizontal line after Skills section */}

        <section id="experience">
          <Experience />
        </section>
        <hr /> {/* Horizontal line after Experience section */}

        <section id="projects">
          <ProjectsPage />
        </section>
        <hr /> {/* Horizontal line after Projects section */}

        <section id="certificates">
          <CertificatePage />
        </section>
        <hr /> {/* Horizontal line after Certificates section */}

        <section id="contact" ref={contactRef}>
          <ContactPage />
        </section>
        <hr /> {/* Horizontal line after Contact section */}
      </main>
    </>
  );
}
