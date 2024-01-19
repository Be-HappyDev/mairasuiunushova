/* eslint-disable @next/next/no-img-element */
import { getProjects, getProjectsBySlug } from "@/contentful";
import { IProjItem } from "@/interfaces/project.interface";
import { Box,Typography } from "@mui/material";

export async function generateStaticParams() {
  const projectsData = await getProjects();

  return projectsData.projects.flatMap((items: IProjItem) => ({
    slug: items.fields.slug,
  }));
}

interface IProject {
  title: string;
  description: string;
  image: {
    fields: {
      file: {
        url: string;
      };
    };
  };
}

export const revalidate = 5000;

const Project = async ({ params: { slug } }: { params: { slug: string } }) => {
  const project: IProject = await getProjectsBySlug(slug);
  const url = project.image.fields.file.url;
  const title = project.title;

  return (
    <Box
      component={"div"}
      sx={{
        paddingTop: "30px",
        paddingbottom: "30px",
      }}
    >
      <Box component={"div"} sx={{}}>
        <Typography variant="h2" component={"h2"} sx={{
          fontSize: { xs: "25px", md: "30px"}
        }}>
          {project.title}
        </Typography>
      </Box>
      <Box component={"div"} sx={{ maxWidth: "320px"}}>
        <img src={`https:${url}`} alt={title} style={{
          width: "100%",
        }} />
      </Box>
      <Box component={"div"} sx={{}}>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </Box>
    </Box>
  );
};
export default Project;
