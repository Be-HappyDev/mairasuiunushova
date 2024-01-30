import { ArticlesPage } from "@/components/ArticlesPage/Articles";
import { getArtclesPage } from "@/contentful";

export const metadata = {
  title: "Articles",
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
