import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "../Link";

export default function ProjectAcademy() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <h2>Academic Project</h2>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Cientific Initiation
          </Typography>
          <Typography sx={{ color: "text.primary" }}>
          BNDESToken Blockchain Transparency Assessment
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            My Scientific Initiation of 2018-2019. Qualitative evaluation
            through the vision of software transparency with the object being
            the BNDES-Token, a system that uses blockchain to generate documents
            of value. Summary available in this: | 
            <Link href="/academic/ci-blockchain-transparency">
                Link
            </Link>|
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
