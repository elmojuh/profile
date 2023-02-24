import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Aqui temos o uso de um array para salvar meus dados de experiência profissional junto a um map para rodar os dados um a um em array.

const data = [
  { id: '01', expandedX: 'painel1', title: 'OWSE', subTitle: 'Requirement Analyst', text: ' OWSE adjusted my professional evolution as a Requirements Analyst. I was able for the first time to participate in a time with processes running in sprint. In addition to acting in queries and monitoring in SQL database and data processing via groovy.' },
  { id: '02', expandedX: 'painel2', title: 'Health Mobile', subTitle: 'Systems Analyst', text: 'I worked as a Junior Systems Analyst at Health Mobile, a healthtech startup focused on health professionals, here I developed my knowledge with project management, agile methodologies, software development and testing.' },
  { id: '03', expandedX: 'painel3', title: 'EJCM', subTitle: 'Systems Analyst - Full Stack Developer - Marketing Advisor', text: 'I performed external and internal marketing functions. I developed myself in image and video editing tools, such as photoshop, illustrator, premiere and others. In addition to advising the organization of internal and partner events. It was a great experience, where I had the opportunity to have contact with Rio Júnior and Brasil Júnior development and testing. <br></br> My first real contact with web development. I learned technologies such as: PHP, Laravel, HTML, CSS, Git, and the use of Agile Technologies. It was a great experience where I was able to manage, program and interact with team partners.' },
]



export default function Experience() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <h2 id="#jobs">Experience</h2>
      {data.map(({ id, expandedX, title, subTitle, text }) => (
        <div key={id}>
          <Accordion
            expanded={expanded === expandedX}
            onChange={handleChange(expandedX)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ color: "text.primary", width: "30%", flexShrink: 0 }}>
                {title}
              </Typography>
              <Typography sx={{ color: "text.primary" }}>
                {subTitle}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {text}
              </Typography>
            </AccordionDetails>
          </Accordion>

        </div>
      ))}

    </div>
  );
}
