import clsx from "clsx";
import styles from "./styles.module.scss";
import { Carlito } from "next/font/google";
import Link from "next/link";

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
            I bring clarity, calm, and precision to every interaction — whether
            in the skies, behind a screen, or inside a spreadsheet. With a
            service-first mindset and a growing edge in data, I’m your go-to for
            smooth support and smart solutions.
          </p>

          <Link href="/#footer" className={styles.hireBtn}>Hire me</Link>
        </div>
      </div>
    </div>
  );
}
