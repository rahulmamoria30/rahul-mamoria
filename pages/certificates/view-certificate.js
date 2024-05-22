import Link from "next/link";
import style from "./Certificate.module.css";
import { useRouter } from "next/router";

export default function ViewCertificate({
  showCertificate,
  courseName,
  certificateLink,
  route
}) {
  const router = useRouter();

  function handleClick() {
    router.push(`certificates/${route}`);
  }

  return (
    <div className={style.view_ceritidate}>
      <div className={style.course_type} onClick={showCertificate}>
        {courseName}
      </div>
      {certificateLink && (
        <div className={style.view} onClick={handleClick}>
          view
        </div>
      )}
    </div>
  );
}
