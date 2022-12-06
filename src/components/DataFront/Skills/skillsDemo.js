import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};


const Star = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#F5DE00",
  },
  "& .MuiRating-iconHover": {
    color: "#ECC700",
  },
});

export default function SkillsDemo() {
  const [value, setValue] = React.useState(3.5);
  const [hover, setHover] = React.useState(-1);
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Typography component="legend">Free Click!</Typography>
      <Star
        key="star"
        name="star"
        defaultValue={4}
        precision={0.5}
        value={value}
        max={5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}
