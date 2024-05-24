import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons'; // Example icon from FontAwesome

import ProjectCard from "./project-card";
import style from "./projects.module.css";

export default function ProjectsPage() {
  return (
    <main className={style.project_section}>
      <div className={style.project_heading_container}>
        <FontAwesomeIcon icon={faProjectDiagram} className={style.project_icon} />
        <h1 className={style.project_main_heading}>Projects </h1>
      </div>
      <ProjectCard />
    </main>
  );
}
