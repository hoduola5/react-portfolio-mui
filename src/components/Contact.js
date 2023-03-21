import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import PortImg from "../images/portfolio-img.png";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/material/Button";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          gap: "5rem",
          padding: "30px",
          margin: "20px auto",
          backgroundColor: "rgba(24, 37, 84, 0.9)",
          flexDirection: "column",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {/* <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} /> */}
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "35ch" },
              display: "flex",
              flexDirection: "column",
            }}
            noValidate
            autoComplete="off"
          >
            <Typography
              sx={{ color: "#FFFFFF", fontStyle: "bold", fontSize: "xs" }}
            >
              Contact Me
            </Typography>
            <TextField
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              sx={{ background: "#CEC6C6", border: "1px solid #922B15" }}
            />
            <TextField
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              sx={{ background: "#CEC6C6", border: "1px solid #922B15" }}
            />
            <TextField
              id="outlined-basic"
              label="Subject"
              variant="outlined"
              sx={{ background: "#CEC6C6", border: "1px solid #922B15" }}
            />
            <TextField
              id="outlined-multiline-static"
              label="Enter Your Message"
              multiline
              rows={4}
              // defaultValue="Enter Your Message"
              sx={{ background: "#CEC6C6", border: "1px solid #922B15" }}
            />

            <Button
              variant="contained"
              disableElevation
              sx={{ background: "#922B15", color: "#FFFFFF", margin: "auto" }}
            >
              Send Message
            </Button>
          </Box>
          <Card
            variant="outlined"
            sx={{ width: "40%", backgroundColor: "rgba(24, 37, 84, 0.9)" }}
          >
            <AspectRatio>
              <div>
                <img src={PortImg} alt="Portfolio Img" />
              </div>
            </AspectRatio>
            <Typography mt={2} sx={{ color: "#FFFFFF", fontStyle: "bold" }}>
              Hammed Oduola
            </Typography>
            <Typography
              sx={{ color: "#FFFFFF", fontStyle: "bold", fontSize: "xs" }}
            >
              Software Developer
            </Typography>
            <Typography
              level="body2"
              sx={{
                color: "#FFFFFF",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "xs",
                lineHeight: "30px",
                marginTop: "50px",
              }}
            >
              I am always available for Freelance work. Connect with me via
              email or give me a call.
            </Typography>
            <Typography
              level="body2"
              sx={{
                color: "#FFFFFF",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "xs",
                lineHeight: "30px",
              }}
            >
              Email: oabdulhamid1@gmail.com
            </Typography>
            <Typography
              level="body2"
              sx={{
                color: "#FFFFFF",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "xs",
                lineHeight: "30px",
              }}
            >
              Phone: +447513676913
            </Typography>
          </Card>
        </Container>
      </Container>
    </React.Fragment>
  );
}
