import React from "react";
import { Container, Grid, Button, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import CourseCards from "./FeatureCards";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#1A1A1A"
  },
  heading: {
    backgroundColor: "#1A1A1A",
    paddingTop: 32,
    marginBottom: 8
  },
  divider: {
    margin: "0 auto",
    height: 4,
    width: "20%",
    backgroundImage: " linear-gradient(to right, red,blue,yellow)",
    marginBottom: 8
  },
  nav: {
    backgroundColor: "#1A1A1A",
    paddingTop: 16
  }
}));

const courseBtns = [
  "Development",
  "Exercise",
  "Material Design",
  "Music",
  "Photography",
  "Software Development",
  "Temporary"
];

const coursesNav = courseBtns.map((courseBtn, index) => (
  <Grid item key={courseBtn + index}>
    <Button color="primary">{courseBtn}</Button>
  </Grid>
));

export default function RecentCourses() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid
        container
        className={classes.heading}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {/* <Grid item>
          <Typography variant="h2" color="secondary">
            Recent Courses Just for You
          </Typography>
        </Grid> */}
      </Grid>
      <Divider className={classes.divider} variant="middle" />
      <Container maxWidth="lg">
        <Grid
          container
          className={classes.nav}
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid item>
            <Button variant="contained">All Categories</Button>
          </Grid>
          {coursesNav}
        </Grid>
      </Container>
      <CourseCards />
    </div>
  );
}
