/* eslint-disable @next/next/no-img-element */
import { getAboutPage } from "@/contentful";
import { Typography } from "@mui/material";
import styles from "./About.module.css";

export const metadata = {
  title: 'About me',

}

const About = async () => {
  const data = await getAboutPage();
  const myImage = data.myImage.fields.file.url;
  const Email = data.aboutContacts.fields.email;
  const phoneNumber = data.aboutContacts.fields.phoneNumber;

  return (
    <div className={styles.aboutPage}>
      <div className={styles.aboutMe}>
        <Typography variant="h3" component={"h3"}>
          {data.pageTitle}
        </Typography>
        <div className={styles.aboutMeInfo}>
          <div className={styles.myImage}>
            <img src={`https:${myImage}`} alt={data.myImage.fields.title} />
          </div>
          <Typography variant="body1">{data.aboutMe}</Typography>
        </div>
      </div>
      <div className={styles.contacts}>
        <Typography variant="h3" component={"h3"}>
          КОНТАКТЫ
        </Typography>
        <div className={styles.contactsBlock}>
          <Typography variant="body1">
            {data.aboutContacts.fields.address}
          </Typography>
          <Typography variant="body1">
            <a href={`mailto:${Email}`}>{Email}</a>
          </Typography>
          <Typography variant="body1">
            <a href={`tel:${phoneNumber}`}>Телефон: +{phoneNumber}</a>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
