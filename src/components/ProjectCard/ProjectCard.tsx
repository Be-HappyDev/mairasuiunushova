import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

interface IProps {
  title: string;
  description: string;
  url: string;
  slug: string;
}

export default function ProjectCard({ title, description, url, slug }: IProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 180 }} image={`https:${url}`} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
        sx={{ display: {xs: "none", md:"block"} }}
          style={{ maxHeight: "200px", overflow: "hidden" }}
          variant="body2"
          color="text.secondary"
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/projects/${slug}`}>
        <Button size="small">Подробнее</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
