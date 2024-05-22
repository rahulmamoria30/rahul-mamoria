import Skills from "./skills"
import style from "./Skills.module.css"
export default function MySkills(){
    return <main className={style.my_skills}> 
        <h1 className={style.skills_heading}>My technical skills </h1>
        <Skills/>
    </main>
}