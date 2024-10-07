import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons'; // Example icon from FontAwesome
import ProjectCard from "./project-card";

export default function ProjectsPage() {
  return (
    <main className=" font-boska" >
      <h1 className="text-gray-100 text-4xl md:text-5xl lg:text-6xl py-8 md:py-12 lg:py-16">Projects</h1> 
      <ProjectCard />
    </main>
  );
}
