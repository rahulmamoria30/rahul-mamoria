import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faFacebook,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { GitHub, Instagram, LinkedIn, Mail } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="py-4 text-gray-300 font-boska">
      <div className="flex flex-col items-center flex-grow gap-4">
        <div className="flex items-center justify-center gap-5 text-4xl">
          <Link href="https://www.instagram.com/rahul_rm__/" target="_blank">
            <Instagram className="h-10 w-10" />
          </Link>

          <Link href="https://www.linkedin.com/in/rahulmm07/" target="_blank">
            <LinkedIn className="h-10 w-10" />
          </Link>

          <Link href="https://github.com/rahulmamoria30" target="_blank">
            <GitHub className="h-10 w-10" />
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
