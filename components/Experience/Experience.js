import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import styles from "./experience.module.css";

export default function Experience() {
  return (
    <section className={styles.experienceSection}>
      <h1 className="heading">
        <FontAwesomeIcon icon={faBriefcase} className={styles.icon} />
        Work Experiences
      </h1>

      <div className={styles.experienceContainer}>
        <h1>Full Time</h1>
        <div className={styles.experienceItem}>
          <div className={styles.company_details}>
            <div className={styles.companyName}>
              <img
                src="/images/grid-dynamics.png"
                alt="Company logo"
                className={styles.companyLogo}
              />
              <h2>Grid Dynamics</h2>
            </div>
            <div className={styles.title}>
              <p>Position: Software Engineer</p>
              <p>Duration: March, 2024 to Present</p>
              <p>Location: Hyderabad, India</p>
            </div>
          </div>
          <div className={styles.work_desciption}>
            <p>
              As a Software Engineer at Grid Dynamics, I leverage my proficiency in React.js and Next.js to develop dynamic web applications. I excel in creating responsive and interactive user interfaces using JavaScript and have a strong track record in designing and implementing efficient frontend solutions. My ability to craft scalable codebases that adhere to best practices and my collaborative nature have contributed to success in agile development environments.
            </p>
            <ul>
              <li>
                Proficient in utilizing React.js and Next.js to develop dynamic
                web applications.
              </li>
              <li>
                Skilled in creating responsive and interactive user interfaces
                using JavaScript.
              </li>
              <li>
                Experienced in designing and implementing efficient frontend
                solutions.
              </li>
              <li>
                Strong ability to craft scalable codebases that adhere to best
                practices.
              </li>
              <li>
                Collaborative team player with a track record of success in
                agile development environments.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.experienceContainer}>
        <h1>Internships</h1>
        <div className={styles.experienceItem}>
          <div className={styles.company_details}>
            <div className={styles.companyName}>
              <img
                src="/images/grid-dynamics.png"
                alt="Company logo"
                className={styles.companyLogo}
              />
              <h2>Grid Dynamics</h2>
            </div>
            <div className={styles.title}>
              <p>Position: UI Developer Internship</p>
              <p>Duration: Sep, 2023 to March, 2024</p>
              <p>Location: Hyderabad, India</p>
            </div>
          </div>
          <div className={styles.work_desciption}>
            <p>
              During my internship as a UI Developer at Grid Dynamics, I gained hands-on experience with JavaScript and React, transforming design concepts into responsive and user-friendly interfaces. I worked on real-time projects, showcasing my ability to contribute effectively in a professional environment.
            </p>
            <ul>
              <li>
                Dynamic and driven UI Developer with hands-on experience gained
                through a comprehensive internship.
              </li>
              <li>
                Proficient in JavaScript and React, with a keen ability to
                translate design concepts into responsive and user-friendly
                interfaces.
              </li>
              <li>Demonstrated expertise in working on real-time projects.</li>
            </ul>
          </div>
        </div>

        <div className={styles.experienceItem}>
          <div className={styles.company_details}>
            <div className={styles.companyName}>
              <img
                src="/images/flyzy.png"
                alt="Company logo"
                className={styles.companyLogo}
              />
              <h2>Flyzy</h2>
            </div>
            <div className={styles.title}>
              <p>Position: Backend Developer Internship</p>
              <p>Duration: Jun, 2023 to Aug, 2023</p>
              <p>Location: Remote, Work from Home</p>
            </div>
          </div>
          <div className={styles.work_desciption}>
            <p>
              As a Backend Developer Intern at Flyzy, I focused on creating, maintaining, testing, and debugging the backend of applications and systems. My role involved handling core application logic, databases, data and application integration, APIs, and other backend processes, ensuring smooth and efficient operations behind the scenes.
            </p>
            <ul>
              <li>
                Worked as a backend developer intern, creating, maintaining,
                testing, and debugging the backend of an application or system.
              </li>
              <li>
                Handled core application logic, databases, data and application
                integration, API, and other processes taking place behind the
                scenes.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
