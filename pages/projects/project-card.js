// ProjectCard.js
import Image from "next/image";
import style from "./projects.module.css";
import PROJECT_DATA from "./project-data";
import Link from "next/link";

export default function ProjectCard() {
  const project_name = "software-unit-tesing";
  return (
    <div className={style.project_container}>
      {PROJECT_DATA.map((project, index) => (
        <div key={index} className={style.project_card}>
          <Image
            src={project.image}
            height={200}
            width={200}
            alt={project.project_name}
            layout="fixed"
          />
          <p>{project.project_name}</p>
          <div className={style.view_details}>
            <Link
              href={`/projects/${project.route}`}
              className={style.project_details_link}
            >
              View details{" "}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
