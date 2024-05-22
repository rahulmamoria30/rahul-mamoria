import React from "react";
import style from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faFacebook,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const router =useRouter();
  return (
    <footer className={style.footer}>
      <div className={style.footer_container}>
        <div className={style.footer_contact}>
          <h3 className={style.contact_heading}>Contact Me</h3>
          <div className={style.contact_details}>
            <h5>Email : </h5>
            <p className={style.contact_text}>rahulmamoria@gmail.com</p>
          </div>
          <div className={style.contact_details}>
            <h5>Phone Number : </h5>
            <p className={style.contact_text}>+91 7690898460</p>
          </div>
          <div className={style.contact_details}>
            <h5>Address</h5>
            <p className={style.contact_text}>
              Viratnagar, Jaipur, Rajasthan, India
            </p>
          </div>
        </div>

        <div className={style.footer_social}>
          <div className={style.footer_logo}>
            <Image
              src="/images/Logo1.png"
              alt="page logo"
              width={100}
              height={70}
            />
          </div>
          <p className={style.footer_social_text}>
          I leverage my creative prowess to design and craft visually engaging user interface pages. Through meticulous attention to detail, I ensure the seamless integration of functionality and aesthetics in every project.
          </p>

          <div className={style.footer_social_link}>
            <Link
              className={style.social_link}
              href="https://www.instagram.com/rahul_rm__/"
              passHref
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link
              className={style.social_link}
              href="https://www.linkedin.com/in/rahulmm07/"
              passHref
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link
              className={style.social_link}
              href="https://www.facebook.com/rahul.mamoria.7?mibextid=ZbWKwL"
              passHref
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link
              className={style.social_link}
              href="https://twitter.com/rahul_rm__?t=ciF-p-3-9-76LLWu02gwwg&s=09"
              passHref
              target="_blank"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </div>

          <div className={style.copyrights}>@Copyrights - Rahul Mamoria</div>
        </div>

        <div className={style.footer__nav}>
        <h3 className={style.contact_heading}>Checkout Links</h3>
        <Link
            className={`${style.footer_navlinks} ${
              router.pathname === "/" ? style.active : ""
            }`}
            href="/"
          >
          Home Page
          </Link>
        <Link
            className={`${style.footer_navlinks} ${
              router.pathname === "/about" ? style.active : ""
            }`}
            href="/about"
          >
            About me
          </Link>
          <Link
            className={`${style.footer_navlinks} ${
              router.pathname === "/projects" ? style.active : ""
            }`}
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className={`${style.footer_navlinks} ${
              router.pathname === "/certificates" ? style.active : ""
            }`}
            href="certificates/"
          >
            Certifications
          </Link>
          <Link
            className={`${style.footer_navlinks} ${
              router.pathname === "/experience" ? style.active : ""
            }`}
            href="/experience"
          >
            Work Experiences
          </Link>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
