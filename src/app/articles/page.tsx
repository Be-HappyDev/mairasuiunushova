import { ArticlesPage } from "@/components/ArticlesPage/Articles";
import { getArtclesPage } from "@/contentful";

export const metadata = {
  title:
    "Maira Suiunyshova - Empowering Business Success Through IT Innovation",
  description:
    "Partner with Maira Suiunyshova for unparalleled IT consulting. Elevate your business with strategic solutions and visionary software engineering expertise.",
};

const Articles = async () => {
  const articles = await getArtclesPage();

  const titles = {
    title_en: articles.pageTitle_en,
    title_ru: articles.pageTitle_ru,
  };

  return <ArticlesPage titles={titles} articles={articles.articles} />;
};

export default Articles;
