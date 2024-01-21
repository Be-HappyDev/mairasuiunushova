"use client";

import { useChangeLang } from "@/store/store";
import { Typography } from "@mui/material";

export const UserName = ({ userName }: any) => {
  const lang = useChangeLang((state) => state.lang);

  const username = userName.fields[lang];

  return (
    <Typography variant="h2" component="h2">
      {username}
    </Typography>
  );
};
