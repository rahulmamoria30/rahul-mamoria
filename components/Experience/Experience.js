import React from 'react';
import { Business, Event, LocationOn, KeyboardArrowDown } from '@mui/icons-material';
import { Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import styles from './experience.module.css';
import experienceData from '@/data/experience-data';

export default function Experience() {
  return (
    <section className={styles.experienceSection}>
    <h1 className="heading">
    <Business className={styles.icon} />  work experiences
            </h1>
   

<div className={styles.experience}>
      {experienceData.map((experience, index) => (
        <Accordion key={index} className={styles.experienceContainer}>
          <AccordionSummary
            expandIcon={<KeyboardArrowDown />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            className={styles.dropdownHeader}
          >
            <Typography>{experience.type}</Typography>
          </AccordionSummary>
          <AccordionDetails className={styles.experienceItem}>
            <div className={styles.company_details}>
              <div className={styles.companyName}>
                <img
                  src={experience.logo}
                  alt="Company logo"
                  className={styles.companyLogo}
                />
                <Typography variant="h6">{experience.company}</Typography>
              </div>
              <div className={styles.company_title}>
                <Typography style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Business fontSize="small" /> {experience.title}
                </Typography>
                <Typography style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Event fontSize="small" /> {experience.date}
                </Typography>
                <Typography style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <LocationOn fontSize="small" /> {experience.location}
                </Typography>
              </div>
            </div>
            <div className={styles.work_desciption}>
              <Typography>{experience.description}</Typography>
              <ul>
                {experience.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>
      ))}

</div>
    </section>
  );
}
