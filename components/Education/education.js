import EducationComponent from "./educationComponent";
import style from "./Education.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export default function EducationSection() {
  return (
    <main className={style.education_section}>
      <h1 className="heading">
        <FontAwesomeIcon icon={faGraduationCap} className={style.icon} /> My Education
      </h1>
      <div>
        <EducationComponent />
      </div>
    </main>
  );
}