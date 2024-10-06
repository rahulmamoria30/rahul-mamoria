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
        <section id="about" ref={aboutRef}>
          <AboutPage />
        </section>
        <section id="skills">
          <MySkills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <ProjectsPage />
        </section>
        <section id="certificates">
          <CertificatePage />
        </section>
        <section id="contact" ref={contactRef}>
          <ContactPage />
        </section>
      </main>
    </>
  );
}
