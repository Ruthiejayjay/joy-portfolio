import clsx from "clsx";
import styles from "./styles.module.scss";

const publications = [
  {
    title: "BLOOM, CHILD, BLOOM",
    link: "https://www.linkedin.com/in/joy-akpan-/",
  },
  {
    title: "TALES OF HER ENERGY",
    link: "https://www.linkedin.com/in/joy-akpan-/",
  },
];

export default function PublicationsSection() {
  return (
    <div className={styles.publicationsSection}>
      <div className={clsx("container", styles.container)}>
        <h4 className={styles.title}>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            width="24"
            height="24"
            style={{ verticalAlign: "middle", marginRight: "8px" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 3.75a7.5 7.5 0 01-7.5 7.5l-3 3 3.75.75.75 3.75 3-3a7.5 7.5 0 017.5-7.5z"
            />
          </svg> */}
          
          Published Poems
        </h4>

        <ul className={styles.list}>
          {publications.map((pub, index) => (
            <li key={index} className={styles.item}>
              <a href={pub.link} target="_blank" rel="noopener noreferrer">
                {pub.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
