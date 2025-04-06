import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ThemeColors } from "../../styles/theme";

interface NavItem {
  text: string;
  key: string;
}

interface NavbarProps {
  window?: () => Window;
}

const navItems: NavItem[] = [
  { text: "Dashboard", key: "" },
  { text: "Biblioteca de Faturas", key: "bills-library" },
];

export default function Navbar({ window }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<string>("");

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleNavClick = (key: string) => {
    setCurrentPage(key);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Faturas de Energia
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link
            key={item.key}
            to={`/${item.key}`}
            style={{ textDecoration: "none" }}
          >
            <ListItem disablePadding>
              <ListItemButton
                sx={{ textAlign: "center", color: ThemeColors.textPrimary }}
              >
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="relative"
        component="nav"
        aria-label="barra de navegação das páginas do sistema"
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="abre o menu de navegação"
            onClick={handleDrawerToggle}
            sx={{ mr: "-16px", display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              display: { md: "block" },
              textAlign: { xs: "center", md: "start" },
            }}
          >
            <Link
              to="/"
              onClick={() => handleNavClick("")}
              style={{ textDecoration: "none", color: ThemeColors.textPrimary }}
            >
              Faturas de Energia
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={`/${item.key}`}
                onClick={() => handleNavClick(item.key)}
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{
                    color: ThemeColors.textPrimary,
                    mr: 2,
                    backgroundColor:
                      item.key === currentPage
                        ? ThemeColors.primaryLight
                        : "transparent",
                    ":hover": {
                      backgroundColor: ThemeColors.primary,
                    },
                  }}
                >
                  {item.text}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { md: "block" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
