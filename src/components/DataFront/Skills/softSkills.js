import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";

const skills = [
  { id:"collavoration", name: "Collaboration", number: 4.5 },
  { id:"organization", name: "Organization or Planning", number: 4.5 },
  { id:"flexibility", name: "Flexibility", number: 4.5},
  { id:"resilience", name: "Resilience", number: 4.5},
  { id:"workUnderPressure", name: "Work Under Pressure", number: 5},
  { id:"abilityToSolveProblems", name: "Ability to Solve Problems", number: 4.5},
  { id:"negotiation", name: "Negotiation", number: 4.5},
  { id:"leadership", name: "Leadership", number: 4.5}
];

const Hearts = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#005861",
  },
  "& .MuiRating-iconHover": {
    color: "#013F45",
  },
});


export default function SoftSkill() {
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      {skills.map(({id, name, number}) => (
        <div key={id}>
        <Typography component="legend">{name}</Typography>
        <Hearts
          key={id}
          readOnly
          name="customized-color"
          defaultValue={number}
          getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />
        </div>
      ))}
     
    </Box>
  );
}
