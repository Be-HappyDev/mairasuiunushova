/* eslint-disable @next/next/no-img-element */
import { Typography } from "@mui/material";
import styles from "./page.module.css";
import { getHome } from "@/contentful";
import Link from "next/link";
import { IProjItem } from "@/interfaces/project.interface";

export const metadata = {
  title: "Maira Suiunushova",
};

export default async function Home() {
  const data = await getHome();
  const image = data.mainBanner.fields.file.url;

  return (
    <main className={styles.main}>
      <div className={styles.mainBanner}>
        <div className={styles.banner}>
          <img src={`https:${image}`} alt={`${data.mainBanner.fields.title}`} />
        </div>
        <Typography variant="h2" component="h2">
          {data?.userName}
        </Typography>
      </div>

      <div className={styles.contentInfo}>
        {data.contentInfo.map((str: string) => (
          <p key={str}>{str}</p>
        ))}
      </div>

      <div className={styles.projects}>
        {data.mainProjects.map((el: IProjItem) => (
          <div key={el.fields.title} className={styles.projectCard}>
            <Link href={`projects/${el.fields.slug}`}>
              <img
                src={`https:${el.fields.image.fields.file.url}`}
                alt={el.fields.image.fields.title}
              />
            </Link>
          </div>
        ))}
        <div className={styles.projectCard}>
          <Link href={`projects`}>
            <img src={"./projects.webp"} alt={"other projects"} />
          </Link>
        </div>
      </div>
    </main>
  );
}
