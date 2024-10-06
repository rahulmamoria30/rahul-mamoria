import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons'; // Example icon from FontAwesome
import ProjectCard from "./project-card";

export default function ProjectsPage() {
  return (
    <main className="p-6 bg-gray-100">
      <div className="flex items-center mb-6">
        <FontAwesomeIcon icon={faProjectDiagram} className="text-4xl text-blue-500 mr-2" />
        <h1 className="text-3xl font-bold">Projects</h1>
      </div>
      <ProjectCard />
    </main>
  );
}
