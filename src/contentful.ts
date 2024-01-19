const contentful = require("contentful");
const client = contentful?.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "87wd79sz3v2y",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "djmxeBdATqsILvFBDX2UmeKWG3Igg9lXGpOV6rUIee0",
});

export const getHome = () => {
  // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token
  return client
    .getEntries({ content_type: "homePage" })
    .then((resp: any) => resp.items[0].fields)
    .catch((err: any) => console.log(err));
};

export const getProjects = () => {
  // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token
  return client
    .getEntries({
      content_type: "projectsPage",
    })
    .then((resp: any) => resp.items[0].fields)
    .catch((err: any) => console.log(err));
};

export const getProjectsBySlug = (slug: string) => {
  return client
    .getEntries({
      "fields.slug": slug,
      content_type: "projects",
    })
    .then((resp: any) => resp.items[0].fields)
    .catch((err: any) => console.log(err));
};

export const getAboutPage = () => {
  return client
    .getEntries({
      content_type: "aboutPage",
    })
    .then((resp: any) => resp.items[0].fields)
    .catch((err: any) => console.log(err));
};

export const getCvPdf = () => {
  return client
    .getEntries({
      content_type: "cvPage",
    })
    .then((resp: any) => resp.items[0].fields)
    .catch((err: any) => console.log(err));
};
