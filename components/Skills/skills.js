import skillsData from './skills-data.js';
import style from "./Skills.module.css" // Import CSS file
import Image from 'next/image.js';
export default function Skills() {
  return (
    <section className={style.skills_section}> {/* Add class for section */}
      {skillsData.map((skill, index) => (
        <div key={index} className={style.skill_box}>
        <Image src={skill.image}  height={100} width={120} />
          <h3>{skill.skillName}</h3>
          <p>{skill.description}</p>
        </div>
      ))}
    </section>
  );
}