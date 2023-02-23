import ProjectAcademy from "../src/components/DataFront/academic";
import Grid from "@mui/material/Grid";
import Skills from "../src/components/DataFront/Skills";
import SobreMim from "../src/components/DataFront/sobreMim";
import Experience from "../src/components/DataFront/experience";
import MyErrorBoundary from "../src/components/MyErrorBoundary";

// index.js - aqui está a página inicial e a aglomiração de funções componentizadas

export default function Home() {
  const fontCollor = "#02556F";

  const style = {
    paddingLeft: '0px',
    fontFamily: 'sans-serif',
    color: {fontCollor}
  }

  const padding = {
    paddingLeft: '20px',
    paddingRight: '10px'
  }

  const myName = {
    name: 'Elmo Sanches G. Júnior'
  }

  return (

    <div style={padding}>
      <br></br>
      <MyErrorBoundary>
      <h1 style={style}>
        {myName.name}
      </h1>
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
      </MyErrorBoundary>
    </div>
  );
}
