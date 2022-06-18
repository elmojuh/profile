import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "../Link";

export default function Experience() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <h2>Experience</h2>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>OWSE</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Requirement Analyst
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            OWSE adjusted my professional evolution as a Requirements Analyst. I
            was able for the first time to participate in a time with processes
            running in sprint. In addition to acting in queries and monitoring
            in SQL database and data processing via groovy.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Health Mobile
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Systems Analyst
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I worked as a Junior Systems Analyst at Health Mobile, a healthtech
            startup focused on health professionals, here I developed my
            knowledge with project management, agile methodologies, software
            development and testing.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>EJCM</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Systems Analyst - Full Stack Developer - Marketing Advisor
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I performed external and internal marketing functions. I developed
            myself in image and video editing tools, such as photoshop,
            illustrator, premiere and others. In addition to advising the
            organization of internal and partner events. It was a great
            experience, where I had the opportunity to have contact with Rio
            Júnior and Brasil Júnior development and testing. <br></br>
            My first real contact with web development. I learned technologies
            such as: PHP, Laravel, HTML, CSS, Git, and the use of Agile
            Technologies. It was a great experience where I was able to manage,
            program and interact with team partners.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
