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
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.icon}
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M21 10L12 5L3 10L6 11.6667M21 10L18 11.6667M21 10V10C21.6129 10.3064 22 10.9328 22 11.618V16.9998M6 11.6667L12 15L18 11.6667M6 11.6667V17.6667L12 21L18 17.6667L18 11.6667"
                      stroke="#f4f1e8"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
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
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.icon}
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M21 10L12 5L3 10L6 11.6667M21 10L18 11.6667M21 10V10C21.6129 10.3064 22 10.9328 22 11.618V16.9998M6 11.6667L12 15L18 11.6667M6 11.6667V17.6667L12 21L18 17.6667L18 11.6667"
                      stroke="#f4f1e8"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
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
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.icon}
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M21 10L12 5L3 10L6 11.6667M21 10L18 11.6667M21 10V10C21.6129 10.3064 22 10.9328 22 11.618V16.9998M6 11.6667L12 15L18 11.6667M6 11.6667V17.6667L12 21L18 17.6667L18 11.6667"
                      stroke="#f4f1e8"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
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
