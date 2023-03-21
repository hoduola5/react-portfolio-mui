//Home component
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PortImg from "../images/portfolio-img.png";

export default function ImgMediaCard() {
  return (
    <Card
      sx={{
        maxWidth: 845,
        maxHeight: "100vh",
        backgroundColor: "rgba(24, 37, 84, 0.9)",
        // display: "flex",
        margin: "auto",
      }}
    >
      <CardContent
        sx={{
          maxWidth: 345,
          display: "flex",
          flexDirection: "row",
          gap: 20,
          height: "60vh",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            width: "100%",
          }}
        >
          Hey there, I'm Hammed,
          <Typography variant="body2" color="text.secondary">
            Front-End web developer
          </Typography>
        </Typography>
        <img
          src={PortImg}
          alt="Portfolio Img"
          sx={{
            height: "20vh",
            mr: 1,
            maxWidth: 10,
          }}
        />
      </CardContent>
      <CardActions>
        <Button
          size="small"
          sx={{
            backgroundColor: "#FFFFFF",
          }}
        >
          HTML
        </Button>
        <Button
          size="small"
          sx={{
            backgroundColor: "#FFFFFF",
          }}
        >
          CSS
        </Button>
        <Button
          size="small"
          sx={{
            backgroundColor: "#FFFFFF",
          }}
        >
          JavaScript
        </Button>
        <Button
          size="small"
          sx={{
            backgroundColor: "#FFFFFF",
          }}
        >
          Node.js
        </Button>
        <Button
          size="small"
          sx={{
            backgroundColor: "#FFFFFF",
          }}
        >
          React
        </Button>
        <Button
          size="small"
          sx={{
            backgroundColor: "#FFFFFF",
          }}
        >
          Bootstrap
        </Button>
        <Button
          size="small"
          sx={{
            backgroundColor: "#FFFFFF",
          }}
        >
          material UI
        </Button>
      </CardActions>
    </Card>
  );
}
