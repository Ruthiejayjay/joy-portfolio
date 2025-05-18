import clsx from "clsx";
import styles from "./styles.module.scss";
import { Carlito } from "next/font/google";

const carlitoFont = Carlito({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Hero() {
  return (
    <div className={clsx(styles.hero)}>
      <div className={clsx(styles.container, "container")}>
        <div className={styles.heading}>
          <h2 className={styles.title}>
            Hello,<span> I am Joy!</span>
          </h2>
          <p className={clsx(styles.desc, carlitoFont.className)}>
            I believe brevity is key. My print and digital designs are all about
            minimalism and elegance.
          </p>

          <button className={styles.hireBtn}>Hire me</button>
        </div>
      </div>
    </div>
  );
}
