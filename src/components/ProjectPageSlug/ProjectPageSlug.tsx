/* eslint-disable @next/next/no-img-element */
"use client";
import { useChangeLang } from "@/store/store";
import { Box, Grid, Typography } from "@mui/material";

interface ProjectItem {
  info: {
    [key: string]: string;
    title_en: string;
    title_ru: string;
    description_en: string;
    description_ru: string;
  };
  url: string;
  title: string;
}

export const ProjectPageSlug = ({ info, url, title }: ProjectItem) => {
  const lang = useChangeLang((state) => state.lang);
  return (
    <Box
      component={"div"}
      sx={{
        paddingTop: "30px",
        paddingbottom: "30px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Typography
            variant="h2"
            component={"h2"}
            sx={{
              fontSize: { xs: "25px", md: "30px" },
            }}
          >
            {info[`title_${lang}`]}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Box component={"div"} sx={{ maxWidth: "320px" }}>
            <img
              src={`https:${url}`}
              alt={title}
              style={{
                width: "100%",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={12} display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Box component={"div"} sx={{}}>
            <Typography variant="body2" color="text.secondary">
              {info[`description_${lang}`]}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
