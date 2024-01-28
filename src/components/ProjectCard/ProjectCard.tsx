"use client";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useChangeLang } from "@/store/store";
import { IProjItem } from "@/interfaces/project.interface";

export const ProjectCard = ({ fields }: any) => {
  const lang = useChangeLang((state) => state.lang);

  return (
    <Card sx={{ maxWidth: 345, width: "100%" }}>
      <CardMedia
        sx={{ height: 180 }}
        image={`https:${fields.image.fields.file.url}`}
        title={fields.title_en}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {fields[`title_${lang}`]}
        </Typography>
        <Typography
          sx={{ display: { xs: "none", md: "block" } }}
          style={{ maxHeight: "200px", overflow: "hidden" }}
          variant="body2"
          color="text.secondary"
        >
          {fields[`description_${lang}`]}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/projects/${fields.slug}`}>
          <Button size="small">Подробнее</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
