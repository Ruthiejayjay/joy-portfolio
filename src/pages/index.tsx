import Head from "next/head";
import { Radley } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero/Index";
import About from "@/components/About/Index";
import EducationalBackground from "@/components/EducationBackground/Index";

const radleyFont = Radley({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="A showcase of my work and projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.page} ${radleyFont.className}`}>
        <main className={styles.main}>
          <Hero />
          <About />
          <EducationalBackground />
        </main>
      </div>
    </>
  );
}
