"use client";
import { useChangeLang } from "@/store/store";
import type { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface ArticlesProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  titles: {
    [key: string]: string;
    title_en: string;
    title_ru: string;
  };
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const ArticleTitle: FC<ArticlesProps> = ({ titles, tag, ...rest }) => {
  const lang = useChangeLang((state) => state.lang);

  switch (tag) {
    case "h1":
      return <h1 {...rest}>{titles[`title_${lang}`]}</h1>;
    case "h2":
      return <h2 {...rest}>{titles[`title_${lang}`]}</h2>;
    case "h3":
      return <h3 {...rest}>{titles[`title_${lang}`]}</h3>;
    case "h4":
      return <h4 {...rest}>{titles[`title_${lang}`]}</h4>;
    case "h5":
      return <h5 {...rest}>{titles[`title_${lang}`]}</h5>;
    case "h6":
      return <h6 {...rest}>{titles[`title_${lang}`]}</h6>;

  }
};
