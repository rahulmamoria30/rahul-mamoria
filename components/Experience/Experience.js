import React from 'react';
import { Business, Event, LocationOn, KeyboardArrowDown } from '@mui/icons-material';
import { Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import experienceData from '@/data/experience-data';

export default function Experience() {
  return (
    <section className="py-10 px-4 font-boska">
      <h1 className="text-gray-100 text-4xl md:text-5xl lg:text-6xl py-8 md:py-12 lg:py-16">
        Work Experiences
      </h1>

      <div className="space-y-4">
        {experienceData.map((experience, index) => (
          <Accordion
            key={index}
            className="border rounded-lg"
            defaultExpanded={index === 0} // Keep the first accordion expanded by default
          >
            <AccordionSummary
              expandIcon={<KeyboardArrowDown />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              className="bg-gray-100 dark:bg-gray-700"
            >
              <Typography className="text-xl font-medium text-gray-800 dark:text-gray-200">
                {experience.type}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="p-4 bg-white dark:bg-gray-800">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
                <div className="flex items-center mb-4 md:mb-0">
                  <img
                    src={experience.logo}
                    alt="Company logo"
                    className="h-12 w-12 rounded-full mr-4"
                  />
                  <Typography
                    variant="h6"
                    className="text-2xl font-semibold text-gray-800 dark:text-gray-200"
                  >
                    {experience.company}
                  </Typography>
                </div>
                <div className="text-gray-600 dark:text-gray-300 space-y-2">
                  <Typography className="flex items-center gap-2">
                    <Business fontSize="small" /> {experience.title}
                  </Typography>
                  <Typography className="flex items-center gap-2">
                    <Event fontSize="small" /> {experience.date}
                  </Typography>
                  <Typography className="flex items-center gap-2">
                    <LocationOn fontSize="small" /> {experience.location}
                  </Typography>
                </div>
              </div>
              <div>
                <Typography className="text-gray-700 dark:text-gray-300">
                  {experience.description}
                </Typography>
                <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300 text-xl">
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
