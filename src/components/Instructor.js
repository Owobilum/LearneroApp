import React from "react";
import { Grid, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#151515",
    paddingTop: 50,
    paddingBottom: 50,
    maxWidth: "100%"
  },
  heading: {
    paddingTop: 32,
    marginBottom: 8
  },
  divider: {
    margin: "0 auto",
    height: 4,
    width: "15%",
    backgroundImage: " linear-gradient(to right, red,blue,yellow)",
    marginBottom: 16
  },
  item: {
    maxWidth: 450
  },
  img: {
    width: "100%"
  },
  itemChild: {
    marginBottom: 32
  }
}));

export default function Instructor() {
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
        <Grid item>
          <Typography variant="h2" color="secondary">
            Become an Instructor
          </Typography>
        </Grid>
      </Grid>
      <Divider className={classes.divider} variant="middle" />

      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item xs={12} sm={4} className={classes.item}>
          <img
            className={classes.img}
            alt="prcing"
            src="https://uploads.codesandbox.io/uploads/user/1a5985a1-0a7f-42b3-81c2-3703197c8d42/cVqf-learnero-illustration.png"
          />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.item}>
          <Typography
            variant="h4"
            color="secondary"
            className={classes.itemChild}
          >
            Be a part of our community of Profession teachers!
          </Typography>
          <Typography
            variant="body2"
            color="secondary"
            className={classes.itemChild}
          >
            Interact with teachers from the same field, gain an opportunity to
            expand your reach of students, join a diverse community of people
            from all over the world, share your skills with everyone, make an
            additional income & so much more!
          </Typography>
          <Link to="/" className={classes.itemChild}>
            <img
              alt="Instructor-signup"
              src="https://uploads.codesandbox.io/uploads/user/1a5985a1-0a7f-42b3-81c2-3703197c8d42/_KBz-learnero-Get-Started-_-178x30.png"
            />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
