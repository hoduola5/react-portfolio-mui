//Projects component
import * as React from "react";
import Grid from "@mui/material/Grid";

import { CardMedia } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import teamInfoGen from "../images/Team-Info-Gen-Screenshot-OOP.png";
import pathos from "../images/Pathos.png";
import passwordGenerator from "../images/password-generator-img.png";
import hariseon from "../images/Refactor-Hariseon.png";
import workDayScheduler from "../images/work-day-scheduler.png";
import loginPage from "../images/login.png";

const projectBank = [
  {
    name: "Team Info Generator",
    description: `Team_Info_Gen is a CLI Application that can be used to generate team profile. This project was built using Nodejs, OOP and TDD (Jest). It prompts user with questions about the team to generate an HTML page for in the terminal and use the answers provided to generate HTML page.`,
    image: teamInfoGen,
  },
  {
    name: "Pathos",
    description: `Pathos is an application that allows user to search for any city of their choice and displays the current weather condition, and also suggest different songs based on weather conditions of the searched city.`,
    image: pathos,
  },
  {
    name: "Password Generator",
    description: `Password Generator is an application that generates password based on user requirements. It require user to enter the length of password they want to generate, and must choose one of the following possible requirements before password can be generated`,
    image: passwordGenerator,
  },
  {
    name: "Refactor Hariseon Codebase",
    description: `Refactor-Hariseon-Codebase is a landing page for Horiseon. I'm motivated to do this so as to ensure that people with disabilities can access the website using assistive technologies such as video captions, screen readers, and braille keyboards by making it more cleaner than I found it to follow Scout Rule, which recommends that you always leave the code a little cleaner than when you found it.`,
    image: hariseon,
  },
  {
    name: "Work Day Scheduler",
    description: `Work-Day-Scheduler is an application for standard daily work hour schedule that uses color-code for each timeblock based on past, present, and future when the timeblock is viewed. It allow a user to enter an event when they click a coloured timeblock, and save the event in local storage when the save button is clicked for each timeblock.`,
    image: workDayScheduler,
  },
  {
    name: "Login Page",
    description: `Here is a login page that accept email and paasword for the login button to load to another page.`,
    image: loginPage,
  },
];

export default function SpacingGrid() {
  return (
    <Grid
      sx={{
        flexGrow: 1,
        margin: "60px auto",
      }}
      container
      spacing={2}
    >
      <Grid item xs={12}>
        <Grid container justifyContent="center" sx={{ gap: 2 }}>
          {projectBank.map((projectBank, i) => (
            <Grid item xs={12} sm={8} md={4} key={i}>
              <CardMedia
                component="img"
                alt="Team Info Gen"
                height="140"
                image={projectBank.image}
              />
              <CardContent sx={{ color: "white" }}>
                <Typography variant="h5" gutterBottom>
                  {projectBank.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ color: "white" }}
                >
                  {projectBank.description}
                </Typography>
              </CardContent>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
