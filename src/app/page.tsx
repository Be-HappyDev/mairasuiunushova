/* eslint-disable @next/next/no-img-element */
import styles from "./page.module.css";
import { getHome } from "@/contentful";
import { UserName } from "@/components/UserName/UserName";
import { ContentInfo } from "@/components/HomeContentInfo/ContentInfo";
import { Metadata } from "next";
import { log } from "console";
import { HomeArticles } from "@/components/HomeArticles/HomeArticles";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://mairasuiunyshova.ru/",
  },
  title:
    "Maira Suiunyshova - Empowering Business Success Through IT Innovation",
  description:
    "Partner with Maira Suiunyshova for unparalleled IT consulting. Elevate your business with strategic solutions and visionary software engineering expertise.",
};

export const revalidate = 3;

export default async function Home() {
  const data = await getHome();
  const personImage = data.personImage.fields.file.url;
  const articles = data.articles;

  const image = data.mainBanner.fields.file.url;
  return (
    <>
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

      <div className={styles.personImageWrap}>
        <div className={styles.personImage}>
          <img src={`https:${personImage}`} alt="Maira Suiunushova" />
        </div>
      </div>

      <HomeArticles articles={articles} />

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
    </>
  );
}
