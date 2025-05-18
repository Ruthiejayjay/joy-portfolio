import clsx from "clsx";
import styles from "./styles.module.scss";

export default function Hero() {
  return (
    <div className={clsx(styles.hero)}>
      <div className={clsx(styles.container, "container")}>
        <div className={styles.heading}>
          <div className={styles.title}>Hello, I am Joy!</div>
          <p className={styles.desc}>
            I believe brevity is key. My print and digital designs are all about
            minimalism and elegance.
          </p>

          <button>Hire me</button>
        </div>
      </div>
    </div>
  );
}
