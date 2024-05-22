import style from "./Education.module.css";
import Eduction_details from "@/eduction-data";

export default function EducationComponent() {
  return (
    <main id="education">
      <section className={style.my_educations}>
        <div className={style.grid_container}>
          {Eduction_details.map((education, index) => (
            <div key={index} className={style.grid_item}>
              <div className={style.eduction_box}>
                <div className={style.education_standard}>
                  <h2>{education.standard}</h2>
                  <p>{education.school_name}</p>
                  <div>
                    <p>{education.year}</p>
                    <p>{education.grade}</p>
                  </div>
                  <div>{education.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
