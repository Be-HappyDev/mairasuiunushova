/* eslint-disable @next/next/no-img-element */
import styles from "./page.module.css";
import { getHome } from "@/contentful";
import Link from "next/link";
import { IProjItem } from "@/interfaces/project.interface";
import { UserName } from "@/components/UserName/UserName";
import { ContentInfo } from "@/components/HomeContentInfo/ContentInfo";

export const metadata = {
  title: "Maira Suiunushova",
};

export const revalidate = 3


export default async function Home() {
  const data = await getHome();

  const image = data.mainBanner.fields.file.url;
  return (
    <main className={styles.main}>
      <div className={styles.mainBanner}>
        <div className={styles.banner}>
          <img src={`https:${image}`} alt={`${data.mainBanner.fields.title}`} />
        </div>
        <UserName userName={data.personName} />
      </div>

      <ContentInfo
        className={styles.contentInfo}
        contentData={data.contentInfoHome}
      />

      {/* <div className={styles.projects}>
        {data.mainProjects.map((el: IProjItem) => (
          <div key={el.fields.slug} className={styles.projectCard}>
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
      </div> */}
    </main>
  );
}
