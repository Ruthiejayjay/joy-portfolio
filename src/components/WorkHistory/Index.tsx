import clsx from "clsx";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Carlito } from "next/font/google";

import CabinCrewImg from "@/assets/images/cabin-crew.jpeg";
import CustomerServiceRepImg from "@/assets/images/customer-service.jpeg";
import EnglishTeacherImg from "@/assets/images/english-teacher.jpeg";
import NewsReporterImg from "@/assets/images/news-reporter.jpeg";

const histories = [
  {
    src: CabinCrewImg,
    alt: "cabin-crew-img",
    title: "Cabin Crew",
    location: "IbomAir, Nigeria",
    date: "2024 - PRESENT",
    details: [
      "Ensure the safety of passengers by performing safety checks, demonstrating emergency procedures, and explaining how to use safety equipment.",
      "Welcome passengers, answer questions and address their needs.",
      "Provide basic first aid when needed.",
    ],
  },
  {
    src: CustomerServiceRepImg,
    alt: "customer-service-rep-img",
    title: "Customer Service Representative",
    location: "IbomAir, Nigeria",
    date: "2021 - 2024",
    details: [
      "Managed customer inquiries and resolved travel related issues,ensuring timely and efficient service",
      "Assisted passengers with check-in, ticketing, and baggage handling,contributing to a seamless customer experience",
      " Maintained accurate records of customer interactions and applied forward-thinking strategies to improve satisfaction",
    ],
  },
  {
    src: EnglishTeacherImg,
    alt: "english-teacher-img",
    title: "English Language Teacher",
    location: "Word of Faith Group of Schools, Uyo",
    date: "2021 - 2021",
    details: [
      "Created an interactive learning environment through adaptive teaching methods and exercises",
      "Provided detailed feedback and revision plans, enhancing student comprehension and engagement",
    ],
  },
  {
    src: NewsReporterImg,
    alt: "news-reporter-img",
    title: "News Reporter",
    location: "Nigerian Television Authority, Yenagoa",
    date: "2018 - 2019",
    details: [
      "Research and gather information through interviews, public records and online resources",
      "Writing clear, concise and engaging news articles or scripts",
      "Ensuring that reports are free from bias and misinformation",
      "Delivering news reports on-air with clarity and professionalism",
    ],
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
            Here&rsquo;s my work history
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
              {/* Hover Overlay with bullet points */}
              <div className={styles.hoverOverlay}>
                <h4>{history.title}</h4>
                <ul className={styles.detailList}>
                  {history.details?.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
