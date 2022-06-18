import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";

const skills = [
  { id: "friendly", name: "Friendly", number: 5 },
  { id: "funny", name: "Funny", number: 4.5 },
  { id: "reliable", name: "Reliable", number: 4.5 },
];

const Hearts = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#005861",
  },
  "& .MuiRating-iconHover": {
    color: "#013F45",
  },
});

export default function MySkills() {
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    > 
      {skills.map(({ id, name, number }) => (
        <div key={id}>
          <Typography component="legend">{name}</Typography>
          <Hearts
            key={id}
            readOnly
            name={name}
            defaultValue={number}
            precision={0.5}
            icon={<FavoriteIcon fontSize="inherit" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          />
        </div>
      ))}
    </Box>
  );
}
