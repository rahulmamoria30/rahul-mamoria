import Image from "next/image";
import CERTIFICATE_DATA from "./data";
import { useRouter } from "next/router";
import style from "./certificateName.module.css"
export default function CertificateName() {
  const router = useRouter();
  const certificate = CERTIFICATE_DATA.find(
    (cert) => cert.route === router.query.certificateName
  );

  // If certificate not found, display a message or a default image
  if (!certificate) {
    return <div className="not-found">Certificate not found</div>;
  }

  return (
    <main className={style.main}>
      <h1 className={style.certificateName_heading}>{certificate.title} certificate</h1>
      <div className={style.certificate_image}>
      <Image src={certificate.image} width={900} height={700} />
      </div>
    </main>
  );
}
