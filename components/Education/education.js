import EducationComponent from "./educationComponent";
import style from "./Education.module.css"
export default function EducationSection() {
  return <main className={style.education_section}>
    <h1 className={style.edu_heading}>My All Eduction</h1>
    <div>
    <EducationComponent/>
    </div>
  </main>
}
