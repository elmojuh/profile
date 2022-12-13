import ProjectAcademy from "../src/components/DataFront/academic";
import Grid from "@mui/material/Grid";
import Skills from "../src/components/DataFront/Skills";
import SobreMim from "../src/components/DataFront/sobreMim";
import Experience from "../src/components/DataFront/experience";



export default function Home() {
  return (
    <div>
      <br></br>
      <Style as="h1" fontColor="#02556F">
        Elmo Sanches G. Júnior
      </Style>
      <br></br>
      <Grid key="body" container spacing={0}>
        <Grid key="information" item xs={12} md={7} sm={7}>
          <Grid key="aboutMe" item xs={12} md={12} sm={12}>
            <SobreMim />
          </Grid>
        </Grid>
        <Grid item xs={12} md={2} sm={2}>
          <></>
        </Grid>
        <br></br>
        <Grid key="skillsTable" item xs={12} md={3} sm={3}>
          <Skills />
        </Grid>
        <Grid key="tables" item xs={12} md={8} sm={8}>
          <br></br>
          <br></br>
          <Grid key="academic" item xs={12} md={12} sm={12}>
            <Experience />
          </Grid>
          <br></br>
          <br></br>
          <Grid key="experience" item xs={12} md={12} sm={12}>
            <ProjectAcademy />
          </Grid>
        </Grid>
      </Grid>
      <br></br>
    </div>
  );
}

function Style({ children, as, fontColor }) {
  const Tag = as;
  return (
    <div>
      <Tag>{children}</Tag>
      <style jsx>
        {`
          ${Tag} {
            padding-left: 0;
            font-family: sans-serif;
            color: ${fontColor};
            
          }
        `}
      </style>
    </div>
  );
}

function CapsLock(props) {
  const textoInserido = props.children;
  const textoEmCapsLock = textoInserido.toUpperCase();
  return <div>{textoEmCapsLock}</div>;
}
