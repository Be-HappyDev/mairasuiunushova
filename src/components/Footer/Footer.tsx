'use client'

import { useChangeLang } from "@/store/store";

export const Footer = () => {
  const lang = useChangeLang((state) => state.lang)

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        borderTop: "1px solid #000",
        width: "100%",
      }}
    >
      2020 {lang === "en" ? "Maira Suiunushova" : "Майра Суйунушова"}
    </div>
  );
};
