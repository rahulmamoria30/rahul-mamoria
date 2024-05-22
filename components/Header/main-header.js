import style from "./main-header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function MainHeader() {
  const router = useRouter();

  function goToHome() {
    router.push("/");
  }

  function handleResumeButton(){

  }
  return (
    <header className={style.header}>
      <div className={style.logo_box}>
        <Image
          className={style.logo}
          src="/images/Logo-1.png"
          alt="Logo image"
          width={100}
          height={100}
          onClick={goToHome}
        />
      </div>

      <div className={style.navigation}>
        <ul className={style.navigation_items}>
        <li>
          <Link
            className={`${style.navigation_item} ${
              router.pathname === "/" ? style.active : ""
            }`}
            href="/"
          >
            Home
          </Link>

        </li>
          
          <li>
          <Link
            className={`${style.navigation_item} ${
              router.pathname.startsWith("/about")? style.active : ""
            }`}
            href="/about"
          >
            About me
          </Link>

          </li>

          <li>
          <Link
            className={`${style.navigation_item} ${
              router.pathname.startsWith("/projects") ? style.active : ""
            }`}
            href="/projects"
          >
             My Work
          </Link>

          </li>

          <li>
          <Link
            className={`${style.navigation_item} ${
              router.pathname.startsWith("/certificates") ? style.active : ""
            }`}
            href="/certificates"
          >
            Certifications
          </Link>

          </li>
         

         <li>
          <Link
            className={`${style.navigation_item} ${
              router.pathname.startsWith("/contact-me") ? style.active : ""
            }`}
            href="/contact-me"
          >
            Contact me
          </Link>

         </li>
        </ul>
      </div>

      <button className={style.btn_cv}>
        <Link href="https://drive.google.com/file/d/1UfwiHdS_JtouHnGfiGwddse2G8FJcut2/view?usp=sharing" className={style.cv} target="_blank">Checkout CV</Link>
      </button>
    </header>
  );
}
