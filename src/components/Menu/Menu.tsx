"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import Link from "next/link";
import styles from "./Menu.module.css";
import { usePathname } from "next/navigation";
import cn from "classnames";
import { useState } from "react";
import { useChangeLang } from "@/store/store";

interface IRoutes {
  title: {
    [key: string]: string;
    ru: string;
  };
  url: string;
}

const routes: IRoutes[] = [
  {
    title: {
      en: "Home",
      ru: "Главная",
    },
    url: "/",
  },
  {
    title: {
      en: "Projects",
      ru: "Проекты",
    },
    url: "/projects",
  },
  {
    title: {
      en: "About me",
      ru: "Обо мне",
    },
    url: "/about-me",
  },
  {
    title: {
      en: "Resume",
      ru: "Резюме",
    },
    url: "/resume",
  },
  {
    title: {
      en: "Articles",
      ru: "Статьи",
    },
    url: "/articles",
  },
];

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;

export const Menu = (props: Props) => {
  const pathName = usePathname();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, changeLang } = useChangeLang((state) => state);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        {routes.map((route) => (
          <ListItem
            key={route.url}
            disablePadding
            className={cn(styles.navli, {
              [styles.activePage]: pathName === route.url,
            })}
          >
            <Link href={`${route.url}`}>
              <ListItemButton sx={{ textAlign: "center" }}>
                {route.title[lang]}
              </ListItemButton>
            </Link>
          </ListItem>
        ))}

        <ListItem disablePadding>
          <Button sx={{ color: "#000" }} onClick={() => changeLang()}>
            {lang}
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#fff",
        }}
      >
        <Toolbar
          sx={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: "none", xs: "flex" },
              color: "#000",
              margin: "0",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {routes.map((item) => (
              <Link key={item.url} href={`${item.url}`}>
                <Button sx={{ color: "#000" }}>{item.title[lang]}</Button>
              </Link>
            ))}
            <Button sx={{ color: "#000" }} onClick={() => changeLang()}>
              {lang}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};
