import ProjectCard from "./project-card";
import style from "./projects.module.css"
export default function ProjectsPage() {
  return (
    <main className={style.project_section}>
      <h1 className={style.project_main_heading}>Projects and work experiences</h1>

      <ProjectCard />
      <ProjectCard />
    </main>
  );
}
