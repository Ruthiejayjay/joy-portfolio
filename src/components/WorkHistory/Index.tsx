import clsx from "clsx";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Carlito } from "next/font/google";

import CabinCrewImg from "@/assets/images/cabin-crew.jpeg";
import CustomerServiceRepImg from "@/assets/images/customer-service-rep.jpeg";
import EnglishTeacherImg from "@/assets/images/english-teacher.jpeg";

const histories = [
  {
    src: CabinCrewImg,
    alt: "cabin-crew-img",
    title: "Cabin Crew",
    location: "IbomAir, Nigeria",
    date: "2024 - PRESENT",
  },
  {
    src: CustomerServiceRepImg,
    alt: "customer-service-rep-img",
    title: "Customer Service Representative",
    location: "IbomAir, Nigeria",
    date: "2021 - 2024",
  },
  {
    src: EnglishTeacherImg,
    alt: "english-teacher-img",
    title: "English Language Teacher",
    location: "Word of Faith Group of Schools, Uyo",
    date: "2021 - 2021",
  },
  {
    src: EnglishTeacherImg,
    alt: "news-reporter-img",
    title: "News Reporter",
    location: "Nigerian Television Authority, Yenagoa",
    date: "2018 - 2019",
  },
];

const carlitoFont = Carlito({
  subsets: ["latin"],
  weight: ["400"],
});

export default function WorkHistory() {
  return (
    <div className={styles.history}>
      <div className={clsx("container", styles.container)}>
        <div className={styles.heading}>
          <h4 className={styles.title}>Work History</h4>
          <p className={clsx(styles.desc, carlitoFont.className)}>
            Here's my work history
          </p>
        </div>
        <div className={styles.gridSection}>
          {histories.map((history, index) => (
            <div key={index} className={styles.historyBox}>
              <div className={styles.imgBox}>
                <Image
                  src={history.src}
                  alt={history.alt}
                  className={styles.img}
                />
              </div>
              <div className={styles.historyContent}>
                <h4 className={styles.title}>{history.title}</h4>
                <h5 className={clsx(styles.desc, carlitoFont.className)}>
                  {history.location}
                </h5>
                <p className={styles.date}>{history.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
