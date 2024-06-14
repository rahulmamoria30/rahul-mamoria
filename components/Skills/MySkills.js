import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import Skills from "./skills";
import style from "./Skills.module.css";

export default function MySkills() {
    return (
        <main className={style.my_skills}> 
            <h1 className="heading">
                <FontAwesomeIcon icon={faCode} className={style.icon} /> My technical skills
            </h1>
            <p className={style.introduction}>
            Over the years, I've gained a robust skill set through my academic and professional journey. My college years provided a strong foundation in programming languages and technologies, which I've enhanced and expanded upon in my professional career.
                Below is a comprehensive list of my technical skills.
            </p>
            <Skills/>
        </main>
    );
}
