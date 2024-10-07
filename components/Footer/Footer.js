import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faFacebook,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="py-4 text-gray-300 font-boska">
      <div className="flex flex-col items-center flex-grow gap-4">

        <div className="flex items-center justify-center gap-5 text-4xl">
          <Link href="https://www.instagram.com/rahul_rm__/" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-gray-500 hover:text-sky-600"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/rahulmm07/" target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-gray-500 hover:text-sky-600"
            />
          </Link>
          <Link
            href="https://www.facebook.com/rahul.mamoria.7?mibextid=ZbWKwL"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-gray-500 hover:text-sky-600"
            />
          </Link>
          <Link
            href="https://twitter.com/rahul_rm__?t=ciF-p-3-9-76LLWu02gwwg&s=09"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-gray-500 hover:text-sky-600"
            />
          </Link>
        </div>

        <p className="max-w-4xl text-2xl text-center px-4">
          Design and Developed by Rahul Mamoria.
        </p>
        
      </div>

      <div className="text-center mt-5 text-sm">
        &copy; Copyright 2024 - Rahul Mamoria
      </div>
    </footer>
  );
};

export default Footer;
