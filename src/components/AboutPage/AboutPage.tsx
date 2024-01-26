"use client";
/* eslint-disable @next/next/no-img-element */
import { Box, Grid, Typography } from "@mui/material";

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
    certificates: { fields: { file: { url: "string" } } }[];
    socialNetworks: { fields: { title: string; linkToSocialNetwork: string; }}[]
  url: string;
}

export const AboutPage = ({
  aboutInfo,
  contacts,
  url,
    certificates,
   socialNetworks
}: IProps) => {
  const lang = useChangeLang((state) => state.lang);

  return (
    <div className={styles.aboutPage}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            component={"h3"}
            sx={{
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            {aboutInfo[`pageTitle_${lang}`]}
          </Typography>

          <div className={styles.aboutMeInfo}>
            <div className={styles.myImage}>
              {url ? (
                <img src={`https:${url}`} alt={aboutInfo.aboutMe_en} />
              ) : (
                <></>
              )}
            </div>
            <Typography
              variant="body1"
              sx={{
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {aboutInfo[`aboutMe_${lang}`]}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            component={"h3"}
            sx={{
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            {lang === "en" ? "Contacts" : "КОНТАКТЫ"}
          </Typography>
          <div className={styles.contactsBlock}>
            <Typography
              variant="body1"
              sx={{
                textAlign: { xs: "center", md: "left" },
                marginBottom: "20px",
              }}
            >
              {contacts.address}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: { xs: "center", md: "left" },
                marginBottom: "20px",
              }}
            >
              <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: { xs: "center", md: "left" },
                marginBottom: "20px",
              }}
            >
              <a href={`tel:${contacts.phoneNumber}`}>
                Телефон: +1{contacts.phoneNumber}
              </a>
                      </Typography>
                      <Box component={'div'}>
                          {
                              socialNetworks.map((item) => (<a className={styles.socialNetwork} key={item.fields.title} href={item.fields.linkToSocialNetwork} > {item.fields.title}</a>))
                          }
                      </Box>
          </div>
        </Grid>
        <Grid container item spacing={2} xs={12}>
          {certificates.map((certificate) => (
            <Grid key={certificate.fields.file.url} item xs={12} md={4}>
              <div className={styles.certificates}>
                <img src={`https:${certificate.fields.file.url}`} alt="" />
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};
