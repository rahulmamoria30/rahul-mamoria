import { useState } from "react";
import style from "./About.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import EducationSection from "@/components/Education/education";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Hobbies from "@/components/Hobbies/Hobbies";
export default function AboutPage() {
  const [expandedAboutMe, setExpandedAboutMe] = useState(true);
  const [expandedProfessionalJourney, setExpandedProfessionalJourney] = useState(true);
  const [expandedCurrentRole, setExpandedCurrentRole] = useState(true);
  const [expandedPassionAspirations, setExpandedPassionAspirations] = useState(true);
  const [expandedGetInTouch, setExpandedGetInTouch] = useState(true);

  // const handleAccordionChange = (panel) => (event, isExpanded) => {
  //   switch (panel) {
  //     case 'aboutMe':
  //       setExpandedAboutMe(isExpanded);
  //       break;
  //     case 'professionalJourney':
  //       setExpandedProfessionalJourney(isExpanded);
  //       break;
  //     case 'currentRole':
  //       setExpandedCurrentRole(isExpanded);
  //       break;
  //     case 'passionAspirations':
  //       setExpandedPassionAspirations(isExpanded);
  //       break;
  //     case 'getInTouch':
  //       setExpandedGetInTouch(isExpanded);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  return (
    <>
      <section className={style.about_section}>
      <div className={style.left_about_section}>
          <div className={style.image_container}>
            <Image
              src="/images/my-image.jpeg"
              className={style.left_img}
              height={580}
              width={400}
            />
          </div>
          <div className={style.image_container}>
            <Image
              src="/images/my-image-2.jpeg"
              className={style.left_img}
              height={580}
              width={400}
            />
          </div>
        </div>
      <div className={style.right_about_section}>
          <h2 className={style.fancy_heading}>Rahul Mamoria</h2>
          <ul className={style.contact_list}>
            <li className={style.contact_item}>
              <FontAwesomeIcon icon={faEnvelope} className={style.icon} />
              <p>rahulmamoria@gmail.com</p>
            </li>
            <li className={style.contact_item}>
              <FontAwesomeIcon icon={faPhone} className={style.icon} />
              <p>+91 7690898460</p>
            </li>
            <li className={style.contact_item}>
              <FontAwesomeIcon icon={faMapMarkerAlt} className={style.icon} />
              <p>Hyderabad, India</p>
            </li>
          </ul>
          <Accordion expanded={expandedAboutMe} >
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h3" className={style.sub_heading}>
                About Me
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" className={style.description}>
              Hello! I'm a junior software engineer at Grid Dynamics. I love creating software that is easy to use and works well. I'm originally from Jaipur, and I bring both creativity and technical skills to my work.              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expandedProfessionalJourney}>
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="h3" className={style.sub_heading}>
                Professional Journey
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" className={style.description}>
              I started my journey into software engineering after graduating from the <strong>National Institute of Technology, Calicut</strong> . My career has focused on Software development, where I've completed important projects. These experiences have helped me create user-friendly interfaces that look good and work well.              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expandedCurrentRole} >
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography variant="h3" className={style.sub_heading}>
                Current Role
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" className={style.description}>
              At Grid Dynamics, I'm heavily involved in using advanced technologies to solve real-life problems directly. I really enjoy working with others to create solutions that make things easier for users and make our work processes smoother. I love using technology to come up with new ideas and find better ways to make our software even better.              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expandedPassionAspirations} >
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography variant="h3" className={style.sub_heading}>
                Passion and Future Aspirations
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" className={style.description}>
                Beyond coding, I'm deeply passionate about continuous learning and staying updated with industry trends. My goal is to evolve as a well-rounded software engineer, proficient in both frontend and backend technologies, enabling me to tackle more complex projects in the future.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expandedGetInTouch}>
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5a-content"
              id="panel5a-header"
            >
              <Typography variant="h3" className={style.sub_heading}>
                Get in Touch
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" className={style.description}>
                I'm always eager to connect with fellow professionals and enthusiasts alike. Whether it's discussing new tech innovations, sharing project ideas, or exploring potential collaborations, feel free to reach out!

                Let's build the future of software together!
              </Typography>
              <div className={style.contact}>
                <Link
                  className={style.link}
                  href="https://www.linkedin.com/in/rahulmm07/"
                  passHref
                  target="_blank"
                  style={{ color: '#0077B5' }}
                >
                  <LinkedInIcon style={{ fontSize: 30 }} />
                </Link>
                <Link
                  className={style.link}
                  href="https://www.instagram.com/rahul_rm__/"
                  passHref
                  target="_blank"
                  style={{ color: '#E4405F' }}
                >
                  <InstagramIcon style={{ fontSize: 30 }} />
                </Link>
                <Link
                  className={style.link}
                  href="https://www.facebook.com/rahul.mamoria.7?mibextid=ZbWKwL"
                  passHref
                  target="_blank"
                  style={{ color: '#1877F2' }}
                >
                  <FacebookIcon style={{ fontSize: 30 }} />
                </Link>
                <Link
                  className={style.link}
                  href="https://twitter.com/rahul_rm__?t=ciF-p-3-9-76LLWu02gwwg&s=09"
                  passHref
                  target="_blank"
                  style={{ color: '#1DA1F2' }}
                >
                  <TwitterIcon style={{ fontSize: 30 }} />
                </Link>
              </div>
            </AccordionDetails>
          </Accordion>
      
        </div>
       
      </section>


        

        
      <EducationSection />
      <Hobbies/>


    </>
  );
}

export {};
