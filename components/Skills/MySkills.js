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
                Over the years, I have acquired a diverse set of skills through both my academic and professional experiences. 
                During my college years, I developed a strong foundation in various programming languages and technologies.
                My professional journey further honed these skills and introduced me to new tools and best practices.
                Below is a comprehensive list of my technical skills.
            </p>
            <Skills/>
        </main>
    );
}
