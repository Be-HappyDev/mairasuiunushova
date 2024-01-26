import { getAboutPage } from "@/contentful";
import { AboutPage } from "@/components/AboutPage/AboutPage";

export const metadata = {
  title: "About me",
};

export const revalidate = 3


export default async function About() {
  const data = await getAboutPage();
  const imageUrl = data?.myImage?.fields?.file?.url;
  const contacts = {
    address: data.aboutContacts.fields.address,
    email: data.aboutContacts.fields.email,
    phoneNumber: data.aboutContacts.fields.phoneNumber,
  };

  const aboutInfo = {
    pageTitle_en: data.pageTitle_en,
    pageTitle_ru: data.pageTitle_ru,
    aboutMe_en: data.aboutMe_en,
    aboutMe_ru: data.aboutMe_ru,
  };
  
  return <AboutPage aboutInfo={aboutInfo} contacts={contacts} url={imageUrl} certificates={data.certificates} />;
}
