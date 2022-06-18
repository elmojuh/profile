
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";

import MySkills from "./mySkills";
import EnglishSkills from "./englishSkills";
import SkillsDemo from "./skillsDemo";
import SoftSkill from "./softSkills";


export default function Skills() {
  return (
    <>
      <Grid key="skillsTable" item xs={12} md={12} sm={12}>
        <Grid key="mySkills" item xs={12} md={12} sm={12}>
          <Accordion>
            <AccordionSummary
              key="mySkills"
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h3>My Skills</h3>
            </AccordionSummary>
            <AccordionDetails key="mySkillsDetals">
              <MySkills/>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid key="softSkills" item xs={12} md={12} sm={12}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h3>Soft Skills</h3>
            </AccordionSummary>
            <AccordionDetails>
              <SoftSkill/>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid key="englishSkills" item xs={12} md={12} sm={12}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h3>English Skills</h3>
            </AccordionSummary>
            <AccordionDetails>
              <EnglishSkills/>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid key="demoSkills" item xs={12} md={12} sm={12}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h3>Skills</h3>
            </AccordionSummary>
            <AccordionDetails>
              <SkillsDemo/>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </>
  );
}
