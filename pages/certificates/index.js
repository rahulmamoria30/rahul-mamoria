import React from 'react';
import Certificate from './my-certificate';
import Head from 'next/head';
import style from "./Certificate.module.css"
const CertificatePage = () => {
  return (
    <>
    <div>
      {/* <h1 className={style.certificate_heading}>My Certificates</h1> */}

      <div className={style.certificate_subheading}>
        Checkout certificates and descriptions
      </div>
      <Certificate/>
    </div>
      
    </>
  );
};

export default CertificatePage;
