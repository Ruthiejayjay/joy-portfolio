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
          <svg
            fill="#9b4819"
            viewBox="0 0 32 32"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: "0.5rem", verticalAlign: "middle" }}
          >
            <title>quill-ink</title>
            <path d="M31.009 0.878c-5.937 0.218-10.752 1.502-14.433 3.482l-1.838 3.073-0.31-1.752c-0.657 0.462-1.266 0.949-1.827 1.46l-0.917 2.813-0.315-1.572c-2.724 3.049-3.942 6.736-3.635 10.504h-4.602v3.063h2.519l-2.703 2.373-1.389 5.303 0.907 0.99h11.058l0.907-0.99-1.389-5.303-2.558-2.373h2.206v-3.063h-4.055c1.596-0.827 3.146-1.971 4.68-3.293l-1.862 0.097 0.017-0.019 3.343-1.423c2.923-2.722 5.828-5.925 8.936-8.625l-1.529-0.324 3.535-1.317c1.673-1.276 3.413-2.358 5.254-3.105z"></path>
          </svg>
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
