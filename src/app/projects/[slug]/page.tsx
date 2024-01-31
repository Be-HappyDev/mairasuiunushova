import { ProjectPageSlug } from "@/components/ProjectPageSlug/ProjectPageSlug";
import { getProjects, getProjectsBySlug } from "@/contentful";
import { IProjItem } from "@/interfaces/project.interface";

export const metadata = {
  title:
    "Maira Suiunyshova - Empowering Business Success Through IT Innovation",
  description:
    "Partner with Maira Suiunyshova for unparalleled IT consulting. Elevate your business with strategic solutions and visionary software engineering expertise.",
};

export async function generateStaticParams() {
  const projectsData = await getProjects();

  return projectsData.projects.flatMap((items: IProjItem) => ({
    slug: items.fields.slug,
  }));
}

interface IProject {
  title_en: string;
  title_ru: string;
  description_en: string;
  description_ru: string;
  image: {
    fields: {
      file: {
        url: string;
      };
    };
  };
}

export const revalidate = 3;

const Project = async ({ params: { slug } }: { params: { slug: string } }) => {
  const project: IProject = await getProjectsBySlug(slug);

  const url = project.image.fields.file.url;
  const title = project.title_en;
  const projectInfo = {
    title_en: project.title_en,
    title_ru: project.title_ru,
    description_en: project.description_en,
    description_ru: project.description_ru,
  };

  return (
    <>
      <ProjectPageSlug info={projectInfo} url={url} title={title} />
    </>
  );
};
export default Project;
