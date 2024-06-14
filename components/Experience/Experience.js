import React from 'react';
import { Business, Event, LocationOn } from '@mui/icons-material'; // Import Material-UI icons
import styles from './experience.module.css';
import experienceData from '@/data/experience-data';
import { Typography } from '@mui/material'; 
export default function Experience() {
  return (
    <section className={styles.experienceSection}>
      <h1 className="heading">
        <Business className={styles.icon} />
        Work Experiences
      </h1>

      {experienceData.map((experience, index) => (
        <div key={index} className={styles.experienceContainer}>
          <h2>{experience.type}</h2>
          <div className={styles.experienceItem}>
            <div className={styles.company_details}>
              <div className={styles.companyName}>
                <img
                  src={experience.logo}
                  alt="Company logo"
                  className={styles.companyLogo}
                />
                <h3>{experience.company}</h3>
              </div>
              <div className={styles.title}>
                <Typography style={{display:"flex", alignItems:"center", gap:"5px"}}>
                  <Business fontSize="small" /> {experience.title}
                </Typography>
                <Typography style={{display:"flex", alignItems:"center", gap:"5px"}}>
                  <Event fontSize="small" /> {experience.date}
                </Typography>
                <Typography style={{display:"flex", alignItems:"center", gap:"5px"}}>
                  <LocationOn fontSize="small" /> {experience.location}
                </Typography>
              </div>
            </div>
            <div className={styles.work_desciption}>
              <p>{experience.description}</p>
              <ul>
                {experience.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
