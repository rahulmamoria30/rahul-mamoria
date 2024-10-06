import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-sky-100 py-4">
      

        <div className="flex flex-col items-center flex-grow border-l border-r border-gray-500 gap-12 mt-10">
        
          <p className="max-w-4xl text-sm text-center">
            I leverage my creative prowess to design and craft visually engaging user interface pages, ensuring the seamless integration of functionality and aesthetics in every project.
          </p>

          <div className="flex items-center justify-center gap-5">
            <Link href="https://www.instagram.com/rahul_rm__/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} className="text-gray-500 text-2xl hover:text-sky-600" />
            </Link>
            <Link href="https://www.linkedin.com/in/rahulmm07/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} className="text-gray-500 text-2xl hover:text-sky-600" />
            </Link>
            <Link href="https://www.facebook.com/rahul.mamoria.7?mibextid=ZbWKwL" target="_blank">
              <FontAwesomeIcon icon={faFacebook} className="text-gray-500 text-2xl hover:text-sky-600" />
            </Link>
            <Link href="https://twitter.com/rahul_rm__?t=ciF-p-3-9-76LLWu02gwwg&s=09" target="_blank">
              <FontAwesomeIcon icon={faTwitter} className="text-gray-500 text-2xl hover:text-sky-600" />
            </Link>
          </div>
        </div>

    

      <div className="text-center mt-5">&copy; Copyright 2024 - Rahul Mamoria</div>
    </footer>
  );
};

export default Footer;
