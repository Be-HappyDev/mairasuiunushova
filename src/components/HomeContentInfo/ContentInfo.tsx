"use client";

import { useChangeLang } from "@/store/store";

type Props = {
  contentData: { fields: { [key: string]: string; ru: string } }[];
  className: string;
};

export const ContentInfo = ({ contentData, ...rest }: Props) => {
  const lang = useChangeLang((state) => state.lang);

  return (
    <div {...rest}>
      {contentData.map((info, idx) => (
        <p key={`${info.fields.en}${idx}`}>{info.fields[lang]}</p>
      ))}
    </div>
  );
};
