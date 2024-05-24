import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import style from "./checkout-cv.module.css";
export default function CheckOutCv() {
  const [pdfUrl, setPdfUrl] = useState("");

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        // Replace 'YOUR_GOOGLE_DRIVE_PDF_URL' with your actual Google Drive PDF URL
        const response = await fetch(
          "https://drive.google.com/file/d/1UfwiHdS_JtouHnGfiGwddse2G8FJcut2/view?usp=sharing"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch PDF document");
        }
        // Assuming the response is a blob, create a URL for it
        const blob = await response.blob();
        const pdfUrl = URL.createObjectURL(blob);
        setPdfUrl(pdfUrl);
      } catch (error) {
        console.error("Error fetching PDF document:", error);
      }
    };

    fetchDocument();
  }, []);

  return (
    <section className={style.resume_container}>
      <div className={style.resume_icon}>
        <FontAwesomeIcon icon={faFileAlt} className={style.pdf_icon} />
        <h1 className={style.resume_heading}>Checkout my cv</h1>
      </div>
      {pdfUrl && (
        <div className={style.pdf_container}>
          <embed
            src={pdfUrl}
            type="application/pdf"
            width="80%"
            height="1000px"
          />
        </div>
      )}
    </section>
  );
}
