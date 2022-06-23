import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";

const skills = [
  { id:"js", name: "Java Script", number: 4 },
  { id:"react", name: "React", number: 4 },
  { id:"nodejs", name: "NodeJS", number: 3.5},
  { id:"git", name: "Git", number: 4.5},
  { id:"java", name: "Java", number: 4},
  { id:"css", name: "CSS", number: 4.5},
  { id:"python", name: "Python", number: 3.5},
];

const Star = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#005861",
  },
  "& .MuiRating-iconHover": {
    color: "#013F45",
  },
});


export default function DevSkills() {
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      {skills.map(({id, name, number}) => (
        <div key={id}>
        <Typography component="legend">{name}</Typography>
        <Star
          key={id}
          readOnly
          name="customized-color"
          defaultValue={number}
          getLabelText={(value) => `${value} Heart${value !== 2 ? "s" : ""}`}
          precision={0.5}
          icon={<StarIcon fontSize="inherit" />}
          emptyIcon={<StarIcon fontSize="inherit" />}
        />
        </div>
      ))}
    </Box>
  );
}
