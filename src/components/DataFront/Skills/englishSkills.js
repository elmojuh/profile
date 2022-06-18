import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";

const skills = [
  { id:"read", name: "Read", number: 3.5 },
  { id:"write", name: "Write", number: 3 },
  { id:"speak", name: "Speak", number: 2.5},
  { id:"listen", name: "Listen", number: 2.5},

];

const Hearts = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#005861",
  },
  "& .MuiRating-iconHover": {
    color: "#013F45",
  },
});


export default function EnglishSkills() {
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
