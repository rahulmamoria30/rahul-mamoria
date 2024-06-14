import { useState, useEffect } from "react";
import style from "./Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function HomePage() {
  const router = useRouter();

  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const amI = ["Programmer", "Designer", "Full stack developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      const currentText = amI[index];
      const currentLength = displayedText.length;
      const nextChar = currentText[currentLength];
      if (nextChar) {
        setDisplayedText((prevText) => prevText + nextChar);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setDisplayedText("");
          setIndex((prevIndex) => (prevIndex + 1) % amI.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [index, displayedText, amI]);

  const goToAbout = () => {
    router.push("/about");
  };

  const goToContact = () => {
    router.push("/contact-me");
  };

  return (
    <main>
      <section className={style.home_page}>
        <div className={style.home_page_left}>
          <h5 className={style.welcome}>Hello, My Name is</h5>
          <h2 className={style.name}>Rahul Mamoria</h2>
          <p className={style.my_name}>
            and I am{" "}
            <span className={style.displayedText}>{displayedText}</span>
          </p>

          <p className={style.my_description}>
            Aspiring and dynamic software engineer seeking to leverage creative and innovative thinking within a growing organization. Committed to enhancing organizational performance while achieving personal professional growth
          </p>

          <div className={style.more_info}>
            <Button variant="contained" color="primary" onClick={goToAbout} style={{padding:"7px 20px"}}>
              About Me
            </Button>
            <Button variant="contained" color="primary" onClick={goToContact} style={{padding:"7px 20px"}}>
              Hire Me
            </Button>
          </div>
        
          <div className={style.social_links}>
          {/* <span>Social Media Links :</span> */}
            <Link
              className={style.link}
              href="https://www.instagram.com/rahul_rm__/"
              passHref
              target="_blank"
              style={{ color: '#E4405F' }}
            >
              <InstagramIcon style={{ fontSize: 40 }} />
            </Link>
            <Link
              className={style.link}
              href="https://www.linkedin.com/in/rahulmm07/"
              passHref
              target="_blank"
              style={{ color: '#0077B5' }}
            >
              <LinkedInIcon style={{ fontSize: 40 }} />
            </Link>
            <Link
              className={style.link}
              href="https://www.facebook.com/rahul.mamoria.7?mibextid=ZbWKwL"
              passHref
              target="_blank"
              style={{ color: '#1877F2' }}
            >
              <FacebookIcon style={{ fontSize: 40 }} />
            </Link>
            <Link
              className={style.link}
              href="https://twitter.com/rahul_rm__?t=ciF-p-3-9-76LLWu02gwwg&s=09"
              passHref
              target="_blank"
              style={{ color: '#1DA1F2' }}
            >
              <TwitterIcon style={{ fontSize: 40 }} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
