import style from "./Education.module.css";
import Eduction_details from "@/eduction-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool, faCalendarAlt, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export default function EducationComponent() {
  return (
    <main id="education">
      <section className={style.my_educations}>
        <div className={style.grid_container}>
          {Eduction_details.map((education, index) => (
            <div key={index} className={style.grid_item}>
              <div className={style.education_box}>
                <div className={style.education_standard}>
                  <h2 className={style.standard}>{education.standard}</h2>
                  <div className={style.education_detail}>
                    <FontAwesomeIcon icon={faSchool} className={style.edu_icon} />
                    <p>{education.school_name}</p>
                  </div>
                  <div className={style.education_detail}>
                    <FontAwesomeIcon icon={faCalendarAlt} className={style.edu_icon} />
                    <p>{education.year}</p>
                  </div>
                  <div className={style.education_detail}>
                    <FontAwesomeIcon icon={faGraduationCap} className={style.edu_icon} />
                    <p>{education.grade}</p>
                  </div>
                  <div className={style.education_description}>
                    {education.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}