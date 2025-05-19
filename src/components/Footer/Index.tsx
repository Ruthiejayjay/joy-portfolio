import clsx from "clsx";
import styles from "./styles.module.scss";
import { FaEnvelope, FaFacebook, FaLinkedin, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={styles.footerSection}>
      <div className={clsx("container", styles.container)}>
        <h3>
          Reach out if you want to work together to create impactful projects
        </h3>
        <div className={styles.socialContainer}>
          <a
            href="akjhay027@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope /> akjhay027@gmail.com
          </a>
          <a
            href="https://web.facebook.com/joy.akpan.805006/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook /> Facebook
          </a>
          <a
            href="www.linkedin.com/in/joy-akpan-/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a href="tel:+08134809266">
            <FaPhone /> +234 (081) 34809266
          </a>
        </div>
      </div>
    </div>
  );
}
