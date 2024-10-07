import HomePage from "@/components/Home/home";
import MySkills from "@/components/Skills/MySkills";
import Experience from "@/components/Experience/Experience";
import AboutPage from "./about";
import ProjectsPage from "./projects";
import CertificatePage from "./certificates";
import ContactPage from "./contact-me";


export default function Home() {
  return (
    <>
      <main>
        <section id="home">
          <HomePage />
        </section>
        <hr />
        <section id="about" className="pb-16">
          <AboutPage />
        </section>
        <hr /> 
        <section id="skills" className="pb-16">
          <MySkills />
        </section>
        <hr /> 
        <section id="experience" className="pb-16">
          <Experience />
        </section>
        <hr /> 
        <section id="projects" className="pb-16">
          <ProjectsPage />
        </section>
        <hr /> 
        <section id="certificates" className="pb-16">
          <CertificatePage />
        </section>
        <hr /> 
        <section id="contact">
          <ContactPage />
        </section>
        <hr /> 
      </main>
    </>
  );
}
