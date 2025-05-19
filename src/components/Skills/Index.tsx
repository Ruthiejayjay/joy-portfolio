import clsx from "clsx";
import styles from "./styles.module.scss";

const skills = [
  {
    title: "Project Management",
  },
  {
    title: "Effective Communication",
  },
  {
    title: "Google Workspace & Microsoft Office Suite",
  },
  {
    title: "Organizational Skills",
  },
  {
    title: "Time Management",
  },
  {
    title: "Adaptability",
  },
  {
    title: "Teamwork",
  },
];

export default function SkillsSection() {
  return (
    <div className={styles.skillsSection}>
      <div className={clsx("container", styles.container)}>
        <div className={styles.heading}>
          <h4 className={styles.title}>My Skills</h4>
        </div>
        <div className={styles.gridContainer}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillPill}>
              {skill.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
