import React from "react";
import { Grid, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#1A1A1A",
    paddingBottom: 48
  },
  heading: {
    backgroundColor: "#1A1A1A",
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
    maxWidth: 345
  },
  img: {
    width: "100%"
  }
}));

export default function Pricing() {
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
            Pricing - New and Improved!
          </Typography>
        </Grid>
      </Grid>
      <Divider className={classes.divider} variant="middle" />
      {/* Price Images */}
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12} sm={4} className={classes.item}>
          <img
            className={classes.img}
            alt="prcing"
            src="https://uploads.codesandbox.io/uploads/user/1a5985a1-0a7f-42b3-81c2-3703197c8d42/HAp6-leanero-card-$10.png"
          />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.item}>
          <img
            className={classes.img}
            alt="pricing"
            src="https://uploads.codesandbox.io/uploads/user/1a5985a1-0a7f-42b3-81c2-3703197c8d42/mcUS-learnero-card-6-$15.png"
          />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.item}>
          <img
            className={classes.img}
            alt="priicng"
            src="https://uploads.codesandbox.io/uploads/user/1a5985a1-0a7f-42b3-81c2-3703197c8d42/qjRb-learnero-card-$18.png"
          />
        </Grid>
      </Grid>
    </div>
  );
}
