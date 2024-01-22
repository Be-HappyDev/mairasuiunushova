"use client";
import { useChangeLang } from "@/store/store";
import { Grid, Typography } from "@mui/material";
import Markdown from "react-markdown";

export const CvContent = ({ pageTitles, data }: any) => {
  const lang = useChangeLang((state) => state.lang);
  return (
    <>
      <Typography variant="h2" component={"h2"}>
        {pageTitles[`title_${lang}`]}
      </Typography>

      <Grid container spacing={2}>
        {data.cvContents.map((el: any, key: number) => {
          const contentType = el.sys.contentType.sys.id;
          if (contentType === "cvContent") {
            return (
              <Grid item xs={12} md={6} key={key}>
                <Markdown>{el.fields[`cvContent_${lang}`]}</Markdown>
              </Grid>
            );
          }
          return <span key={key}>{`Unknown type ${contentType}`}</span>;
        })}
      </Grid>
    </>
  );
};
