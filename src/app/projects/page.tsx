import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { getProjects } from "@/contentful";
import { IProjItem } from "@/interfaces/project.interface";
import { Grid, Typography } from "@mui/material";
import styles from "./projects.module.css";

export const metadata = {
  title: "Projects",
};

export const revalidate = 6;

export default async function Projects() {
  const data = await getProjects();
  return (
    <div className={styles.projectsPage}>
      <Typography variant="h2" component={"h2"}>
        {data.title}
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: { xs: "center", md: "space-between" } }}
      >
        {data ? (
          data.projects.map((project: IProjItem) => (
            <Grid item xs={7} md={4} key={project.fields.slug}>
              <ProjectCard fields={project.fields} />
            </Grid>
          ))
        ) : (
          <p>нет данных</p>
        )}
      </Grid>
    </div>
  );
}
