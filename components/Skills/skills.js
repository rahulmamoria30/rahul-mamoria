import skillsData from './skills-data.js';
import style from "./Skills.module.css"; // Import CSS file
import Image from 'next/image';

export default function Skills() {
  return (
    <section className={style.skills_section}>
      {skillsData.map((skill, index) => (
        <div key={index} className={style.skill_box} style={{ '--animation-order': index }}>
        <div>
          <Image src={skill.image} alt={skill.skillName} height={40} width={60} />
          <h3><a href={skill.link} target='_blank' rel="noopener noreferrer">{skill.skillName}</a></h3>
        </div>
          <p>{skill.description}</p>
        </div>
        
      ))}
    </section>
  );
}
