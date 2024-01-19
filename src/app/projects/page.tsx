import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { getProjects } from "@/contentful";
import { IProjItem } from "@/interfaces/project.interface";
import { Grid, Typography } from "@mui/material";

export const metadata = {
  title: 'Projects',

}

export const revalidate = 5000;
const Projects = async () => {
  const data = await getProjects();

  return (
    <div className="projectsPage">
      <Typography variant="h2" component={"h2"}>
        {data.title}
      </Typography>
      <Grid container spacing={2} sx={{ justifyContent: { xs: "center", md: "space-between" } }}>
        {data ? (
          data.projects.map((project: IProjItem) => (
            <Grid
              item
              xs={7}
              md={4}
              key={project.fields.slug}
            >
              <ProjectCard
                title={project.fields.title}
                description={project.fields.description}
                url={project.fields.image.fields.file.url}
                slug={project.fields.slug}
              />
            </Grid>
          ))
        ) : (
          <p>нет данных</p>
        )}
      </Grid>
    </div>
  );
};

export default Projects;
