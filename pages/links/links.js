
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';

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
    width:"460px",
    maxWidth:"260px",

    "&:hover": {
        backgroundColor: "#000000",
        textDecoration: "none",
        color: "#FFFFFF",
        borderColor: "black",
    },
}));

const center = {
    position: 'relative',
    textAlign: 'center',
}

export default function Links() {

    return (
        <div style={center}>
            <Box sx={{ '& button': { m: 1 } }}>
                <div>
                    {rotesExternePages.map(({ id, name, link, icon: Icon }) => (
                        <a key={id} target="_blank" href={link}>
                            <br></br>
                            <ColorButton variant="contained" size="large" key={id}>
                                <Icon />
                                {name}
                            </ColorButton>
                        </a>
                    ))}
                </div>
            </Box>
        </div>
    );
}
