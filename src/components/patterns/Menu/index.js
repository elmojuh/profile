import Link from "next/link";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';

//DADOS DE ROTAS INTERNAS
const rotesPages = [
  { id: "academic", link: "/academic", name: "Academic" },
  { id: "jobs", link: "/jobs/jobs", name: "Jobs" },
  { id: "links", link: "/links/links", name: "Link" }
];

//DADOS DE LINKS EXTERNOS
const elmosImage = "https://br.gravatar.com/userimage/83388631/48137d8601d6b0c8ab99eeaa108c9fee.png?size=200";

const rotesExternePages = [
  {
    id: "facebook",
    link: "https://www.fb.com/elmo.juh",
    name: "Facebook",
    icon: FacebookIcon,
  },
  {
    id: "instagram",
    link: "https://www.instagram.com/elmojuh/",
    name: "Instagram",
    icon: InstagramIcon,
  },
  {
    id: "linkedin",
    link: "https://www.linkedin.com/in/elmo-junior/",
    name: "Linkedin",
    icon: LinkedInIcon,
  },
  {
    id: "githyb",
    link: "https://github.com/elmojuh",
    name: "GitHub",
    icon: GitHubIcon,
  },
  {
    id: "twitter",
    link: "https://twitter.com/ElmoJuh",
    name: "Twitter",
    icon: TwitterIcon,
  },
];

const ColorButton = styled(Button)(() => ({
  textDecoration: "none",
  color: "#000000",
  backgroundColor: "#FFFFFF",
  borderColor: "black",
  width: "460px",
  maxWidth: "260px",

  "&:hover": {
    backgroundColor: "#000000",
    textDecoration: "none",
    color: "#FFFFFF",
    borderColor: "black",
  },
}));

export default function BarraDeMenu() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{ background: "#0F0F0F" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LaptopChromebookIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Link href="/" passHref>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              My Profile
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {rotesPages.map(({ id, name, link }) => (
                <Link key={id} href={link} passHref>
                  <MenuItem key={id} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <LaptopChromebookIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Link href="/" passHref>
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              My Profile →
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {rotesPages.map(({ id, name, link }) => (
              <Link key={id} href={link} passHref>
                <Button
                  key={id}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {name}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Click to see social midia of Elmo Júnior">
              <IconButton onClick={handleOpenUserMenu} aria-label="Example" sx={{ p: 0 }}>
                <Avatar
                  alt="Elmo Júnior"
                  src={elmosImage}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {rotesExternePages.map(({ id, name, link, icon: Icon }) => (
                <a key={id} target="_blank" href={link}>
                  <MenuItem>
                    <ColorButton key={id}>
                      <Icon />
                      <Typography textAlign="center">{name}</Typography>
                    </ColorButton>
                  </MenuItem>
                </a>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
