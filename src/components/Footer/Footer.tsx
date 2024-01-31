"use client";

import { useChangeLang } from "@/store/store";
import Link from "next/link";

export const Footer = () => {
  const lang = useChangeLang((state) => state.lang);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "20px",
        borderTop: "1px solid #000",
        width: "100%",
      }}
    >
      <span>2020 {lang === "en" ? "Maira Suiunushova" : "Майра Суйунушова"}</span>
      <span>
        <Link href={"/privacy-policy"}>
          {lang === "en" ? "Privacy Policy" : "Политика конфиденциальности"}
        </Link>
      </span>
    </div>
  );
};
