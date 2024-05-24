// ProjectCard.js
import Image from "next/image";
import style from "./projects.module.css";
import Link from "next/link";
import PROJECT_DATA from "@/data/project_data";

function ProjectCard() {
  return (
    <div className={style.project_container}>
      {PROJECT_DATA.map((project, index) => (
        <div key={index} className={style.project_item}>
          <div className={style.project_image}>
            <Image
              src={project.image}
              height={400}
              width={700}
              alt={project.project_name}
            />
          </div>

          <div className={style.project_details}>
            <h1 className={style.project_name}>{project.project_name}</h1>
            <div className={style.project_description}>
              <p>{project.project_detail}</p>
            </div>
            <div className={style.project_buttons}>
              <Link
                href={project.project_link}
                className={style.source_link}
                target="_blank"
              >
                Check Project
              </Link>
              <Link
                href={project.github_link}
                className={style.github_link}
                target="_blank"
              >
                Source Code
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectCard;
