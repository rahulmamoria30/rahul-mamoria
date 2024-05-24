import { useState, useEffect } from "react";
import style from "./Home.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faFacebook,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { Carousel } from "antd";

// Slideshow component
const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <Image
      src={images[currentIndex]}
      alt={`home page image-${images[currentIndex]}`}
      height={500}
      width={500}
      className={style.right_images}
    />
  );
};

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

  const goToHome = () => {
    router.push("/about");
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

          <div>
            <p className={style.my_description}>
              As a UI developer, I leverage my creative prowess to design and
              craft visually engaging user interface pages. Through meticulous
              attention to detail, I ensure the seamless integration of
              functionality and aesthetics in every project.
            </p>

            <button className={style.btn} onClick={goToHome}>
              More About Me
            </button>

            <div>
              <p className={style.get_in_touch}>Get in touch with</p>
              <div className={style.social_links}>
                <Link
                  className={style.link}
                  href="https://www.instagram.com/rahul_rm__/"
                  passHref
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link
                  className={style.link}
                  href="https://www.linkedin.com/in/rahulmm07/"
                  passHref
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link
                  className={style.link}
                  href="https://www.facebook.com/rahul.mamoria.7?mibextid=ZbWKwL"
                  passHref
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
                <Link
                  className={style.link}
                  href="https://twitter.com/rahul_rm__?t=ciF-p-3-9-76LLWu02gwwg&s=09"
                  passHref
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={style.home_page_right}>
          <Slideshow
            images={[
              "/images/img-1.avif",
              "/images/img-2.avif",
              "/images/img-4.jpeg",
              "/images/img-4.jpeg"
            ]}
          />
        </div>
      </section>
    </main>
  );
}
