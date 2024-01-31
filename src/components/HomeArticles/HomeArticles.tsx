/* eslint-disable @next/next/no-img-element */
"use client";
import { Grid, Typography } from "@mui/material";
import styles from "./Articles.module.css";
import { useChangeLang } from "@/store/store";

export const HomeArticles = ({ articles }: any) => {
  const lang = useChangeLang((state) => state.lang);

  return (
    <div className={styles.page}>
      <Grid container justifyContent={"space-between"}>
        {articles.map((article: any) => {
          return (
            <Grid
              className={styles.articleBlock}
              key={article.fields.slug}
              item
              xs={12}
              md={5.8}
            >
              <div className={styles.articleTop}>
                <div className={styles.articleTitle}>
                  <Typography variant="body2" component={"h5"}>
                    {article.fields[`title_${lang}`]}
                  </Typography>
                </div>
                <div className={styles.articleDate}>
                  <Typography variant="body2" component={"p"}>
                    {lang === "en" ? "Date:" : "Дата:"}{" "}
                    {article.fields.dateArticle}
                  </Typography>
                </div>
              </div>
              <div className={styles.articleContent}>
                {article.fields.image ? (
                  <div className={styles.articleContentBlock}>
                    <div className={styles.articleImage}>
                      <img
                        src={`https:${article.fields.image.fields.file.url}`}
                        alt={article.fields.image.fields.title}
                      />
                    </div>
                    <div className={styles.articleDesc}>
                      <Typography variant="body2" component={"p"}>
                        {article.fields[`description_${lang}`]}
                      </Typography>
                    </div>
                  </div>
                ) : (
                  <div className={styles.articleFullDesc}>
                    <Typography variant="body2" component={"p"}>
                      {article.fields[`description_${lang}`]}
                    </Typography>
                  </div>
                )}
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
