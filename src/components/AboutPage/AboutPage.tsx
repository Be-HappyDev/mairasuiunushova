"use client";
/* eslint-disable @next/next/no-img-element */
import { Typography } from "@mui/material";

import { useChangeLang } from "@/store/store";
import styles from "./About.module.css";

interface IProps {
  aboutInfo: {
    [key: string]: string;
    pageTitle_en: string;
    pageTitle_ru: string;
    aboutMe_en: string;
    aboutMe_ru: string;
  };
  contacts: {
    address: string;
    email: string;
    phoneNumber: number;
  };
  url: string;
}

export const AboutPage = ({ aboutInfo, contacts, url }: IProps) => {
  const lang = useChangeLang((state) => state.lang);
  return (
    <div className={styles.aboutPage}>
      <div className={styles.aboutMe}>
        <Typography variant="h3" component={"h3"}>
          {aboutInfo[`pageTitle_${lang}`]}
        </Typography>

        <div className={styles.aboutMeInfo}>
          <div className={styles.myImage}>
            <img src={`https:${url}`} alt={aboutInfo.aboutMe_en} />
          </div>
          <Typography variant="body1">
            {aboutInfo[`aboutMe_${lang}`]}
          </Typography>
        </div>
      </div>
      <div className={styles.contacts}>
        <Typography variant="h3" component={"h3"}>
          {lang === "en" ? "Contacts" : "КОНТАКТЫ"}
        </Typography>
        <div className={styles.contactsBlock}>
          <Typography variant="body1">{contacts.address}</Typography>
          <Typography variant="body1">
            <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
          </Typography>
          <Typography variant="body1">
            <a href={`tel:${contacts.phoneNumber}`}>
              Телефон: +{contacts.phoneNumber}
            </a>
          </Typography>
        </div>
      </div>
    </div>
  );
};
