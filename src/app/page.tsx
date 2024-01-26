/* eslint-disable @next/next/no-img-element */
import styles from "./page.module.css";
import { getHome } from "@/contentful";
import { UserName } from "@/components/UserName/UserName";
import { ContentInfo } from "@/components/HomeContentInfo/ContentInfo";

export const metadata = {
  title: "Maira Suiunushova",
};

export const revalidate = 3;

export default async function Home() {
  const data = await getHome();
  const personImage = data.personImage.fields.file.url;

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
