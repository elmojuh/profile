import Link from "../../src/components/Link";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import * as React from "react";
import { styled } from "@mui/material/styles";

const ColorButton = styled(Button)(() => ({
  textDecoration: "none",
  color: "#FFFFFF",
  backgroundColor: "#000000",
  "&:hover": {
    backgroundColor: "#02556F",
    textDecoration: "none",
  },
}));

export default function Academic() {
  const paddingGlobal = {
    paddingLeft: "7px",
    paddingRight: "7px"
  }
  return (
    <div style={paddingGlobal}>
        <Grid key="aboutMe" item xs={12} md={6} sm={6}>
          <h2>Cientific Initiation</h2>
          <h3>BNDESToken Blockchain Transparency Assessment</h3>
          My Scientific Initiation of 2018-2019. Qualitative evaluation through
          the vision of software transparency with the object being the
          BNDES-Token, a system that uses blockchain to generate documents of
          value. Summary available in this:
          <Link href="/academic/ci-blockchain-transparency">
            <ColorButton color="primary">Link</ColorButton>
          </Link>
        </Grid>
    </div>
  );
}
