import clsx from "clsx";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Carlito } from "next/font/google";

import JoyImage from "@/assets/images/joy-main.jpeg";

const carlitoFont = Carlito({
  subsets: ["latin"],
  weight: ["400"],
});

export default function About() {
  return (
    <div className={styles.about}>
      <div className={clsx(styles.container, "container")}>
        <div className={styles.mainContent}>
          <h2 className={styles.title}>About Joy Akpan</h2>
          <p className={clsx(styles.desc, carlitoFont.className)}>
            Results-driven Virtual Assistant and aspiring Salesforce
            Administrator with a background in Mass Communication. Passionate
            about leveraging technology to bridge educational gaps in
            underserved communities, particularly in North Eastern Nigeria.
            Brings a strong foundation in customer service and digital literacy
            advocacy, combined with a unique blend of tech skills and
            human-centered communication to deliver impactful, mission-driven
            solutions.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageBox}>
            <Image src={JoyImage} alt="Joy Akpan" className={styles.image} />
          </div>
        </div>
      </div>
    </div>
  );
}
