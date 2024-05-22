import React, { useState } from "react";
import Image from "next/image";
import ReactCourse from "./description/React";
import NextJSTopics from "./description/Next";
import JavaScriptTopics from "./description/Javascrtipt";
import style from "./Certificate.module.css";
import ViewCertificate from "./view-certificate";
import GoogleCloud from "./description/GoogleCloud";
import CERTIFICATE_DATA from "./[certificateName]/data";
const Certificate = () => {
  const [courseVisibility, setCourseVisibility] = useState({
    reactCourse: true,
    nextJSCourse: false,
    javascriptCourse: false,
    googleCloud: false
  });

  const handleShowCourse = (course) => {
    setCourseVisibility({
      reactCourse: course === "reactCourse" ? true : false,
      nextJSCourse: course === "nextJSCourse" ? true : false,
      javascriptCourse: course === "javascriptCourse" ? true : false,
      googleCloud: course === "googleCloud" ? true : false
    });
  };

  return (
    <section className={style.certificate_section}>
      <div className={style.left_buttons}>
        <ViewCertificate
          showCertificate={() => handleShowCourse("reactCourse")}
          courseName="React Course"
          certificateLink="https://drive.google.com/file/d/118zNxmzaBsIeM7KZijFxMLEk2vOwE7_V/view?usp=sharing"
          route = "react-certificate"
        />
        <ViewCertificate
          showCertificate={() => handleShowCourse("nextJSCourse")}
          courseName="Next.js Course"
          certificateLink="https://drive.google.com/file/d/118zNxmzaBsIeM7KZijFxMLEk2vOwE7_V/view?usp=sharing"
          route = "nextjs-certificate"
        />
        <ViewCertificate
          showCertificate={() => handleShowCourse("javascriptCourse")}
          courseName="JavaScript Course"
          certificateLink="https://drive.google.com/file/d/1yY5UD2kpxt5rCQ6ZNOnqANkxTZVEkdcU/view?usp=sharing"
          route = "javascript-certificate"
        />
        <ViewCertificate
          showCertificate={() => handleShowCourse("googleCloud")}
          courseName="Google Cloud"
          certificateLink="https://drive.google.com/file/d/1xb4UL5-tGqZZJuu6Xd9wx-ngYhDiPp8-/view?usp=sharing"
          route = "google-cloud-certificate"
        />
        {/* Add more ViewCertificate components for other courses */}
      </div>

      <div className={style.certificate_details}>
      <h2 className={style.details_heading}>Description of the certificate and what i learnt in it.</h2>
        {courseVisibility.reactCourse && <ReactCourse />}
        {courseVisibility.nextJSCourse && <NextJSTopics />}
        {courseVisibility.javascriptCourse && <JavaScriptTopics />}
        {courseVisibility.googleCloud && <GoogleCloud/>}
        {/* Add other course components here */}
      </div>
    </section>
  );
};

export default Certificate;
