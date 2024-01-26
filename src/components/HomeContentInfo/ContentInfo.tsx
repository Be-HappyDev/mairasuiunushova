"use client";

import { useChangeLang } from "@/store/store";
import { Grid } from "@mui/material";
import Markdown from "react-markdown";

type Props = {
  contentData: {
    [x: string]: any;
    fields: { [key: string]: string; ru: string };
  }[];
  className: string;
};

export const ContentInfo = ({ contentData, ...rest }: Props) => {
  const lang = useChangeLang((state) => state.lang);
  
  return (
    <div {...rest}>
      {contentData.map((info, idx) => {
        const contentType = info.sys.contentType.sys.id;
        if (contentType === "homePageContent") {
          
          return (
            <Grid item xs={12} md={6} key={idx}>
              <Markdown>{info.fields[`${lang}`]}</Markdown>
            </Grid>
          );
        }
        return <span key={idx}>{`Unknown type ${contentType}`}</span>;
      })}
    </div>
  );
};

