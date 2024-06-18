import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faCalendarAlt, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import Eduction_details from '@/eduction-data';
import style from './Education.module.css';

export default function EducationComponent() {
  return (
    <main id="education">
      <section className={style.my_educations}>
        <div className={style.grid_container}>
          {Eduction_details.map((education, index) => (
            <div key={index} className={style.grid_item}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <Typography className={style.standard}>{education.standard}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className={style.education_detail}>
                    <FontAwesomeIcon icon={faSchool} className={style.edu_icon} />
                    <Typography>{education.school_name}</Typography>
                  </div>
                  <div className={style.education_detail}>
                    <FontAwesomeIcon icon={faCalendarAlt} className={style.edu_icon} />
                    <Typography>{education.year}</Typography>
                  </div>
                  <div className={style.education_detail}>
                    <FontAwesomeIcon icon={faGraduationCap} className={style.edu_icon} />
                    <Typography>{education.grade}</Typography>
                  </div>
                  
                  <div className={style.education_description}>
                    <Typography>{education.description}</Typography>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
