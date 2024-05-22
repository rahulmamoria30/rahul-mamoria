import style from "./About.module.css";
import Image from "next/image";
import EducationSection from "@/components/Education/education";
export default function AboutPage() {
  return (
    <main>
      <h2 className={style.about_heading}>Just All About me</h2>
      <section className={style.about_section}>
        <div className={style.left_about_section}>
          {/* Dummy images */}
          {/* <div className={style.image_container}>
            <Image src="/images/img-1.jpeg" className={style.left_img_1} height={200} width={200} />
          </div>
          <div className={style.image_container}>
            <Image src="/images/img-2.jpeg" className={style.left_img_2} height={200} width={200} />
          </div>
          <div className={style.image_container}>
            <Image src="/images/img-1.avif" className={style.left_img_3} height={300} width={300} />
          </div> */}
          <div className={style.image_container}>
            <Image src="/images/img-4.jpeg" className={style.left_img_4} height={400} width={400} />
          </div>
        </div>
        <div className={style.right_about_section}>
          <h2>Hii, I am Rahul Mamoria</h2>
          <p>
            I was born on October 30, 2001, in Shahpura, Jaipur, Rajasthan.
            My early schooling took place in my village named Bagawas Chourasi
            until 10th grade. After that, I moved to Shahpura town to prepare
            for the IITJEE examination.
          </p>
          <p>
            Currently, I am working as a software engineer at Grid Dynamics,
            where I have been contributing for the past 8 months. In this role,
            I am involved in developing innovative solutions and collaborating
            with a talented team to deliver high-quality software products.
          </p>
          <ul className={style.contact_list}>
            <li>
              <strong>Email:</strong> rahulmamoria@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> +91 7690898460
            </li>
            <li>
              <strong>Current Location:</strong> Hyderabad, India
            </li>
          </ul>
        </div>
      </section>

      <EducationSection/>
    </main>
  );
}
