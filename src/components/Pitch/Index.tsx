import clsx from "clsx";
import styles from "./styles.module.scss";

export default function Pitch() {
  return (
    <div className={styles.pitchSection}>
      <div className={clsx("container", styles.container)}>
        <h2 className={styles.title}>My Elevator Pitch</h2>
        <div className={styles.videoWrapper}>
        <video
          className={styles.video}
          src="/videos/elevator-pitch.mp4"
          controls
        //   autoPlay
          loop
          muted
        />
        </div>
      </div>
    </div>
  );
}
