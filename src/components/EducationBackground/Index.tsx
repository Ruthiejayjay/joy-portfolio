import clsx from "clsx";
import styles from "./styles.module.scss";
import Image from "next/image";

import SchoolImg from "@/assets/images/school-img.png";

// const degrees = [
//   {
//     icon: SchoolImg,
//     school: "Benson Idahosa University",

//   },
// ];

export default function EducationalBackground() {
  return (
    <div className={styles.background}>
      <div className={clsx("container", styles.container)}>
        <div className={styles.heading}>Background</div>
        <div className={styles.mainContent}>
          <div className={styles.degree}>
            <div className={styles.imgBoxOutline}>
              <div className={styles.imgBox}>
                <Image src={SchoolImg} alt="" />
              </div>
            </div>
            <h4 className={styles.title}>Benson Idahosa University</h4>
            <p className={styles.desc}>
              <span>Bachelor of Science</span>
              <span>Second Class Honors, Lower Division</span>
              <span>2013 - 2017</span>
            </p>
          </div>
          <div className={styles.degree}>
            <div className={styles.imgBoxOutline}>
              <div className={styles.imgBox}>
                <Image src={SchoolImg} alt="" />
              </div>
            </div>
            <h4 className={styles.title}>Air Force Comprehensive School</h4>
            <p className={styles.desc}>
              <span>Senior Secondary Certificate</span>
              <span>2007 - 2013</span>
            </p>
          </div>

          <div className={styles.degree}>
            <div className={styles.imgBoxOutline}>
              <div className={styles.imgBox}>
                <Image src={SchoolImg} alt="" />
              </div>
            </div>
            <h4 className={styles.title}>Word of Faith Group of Schools</h4>
            <p className={styles.desc}>
              <span>First School Leaving Certificate</span>
              <span>2001 - 2006</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
