import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: "10%",
    paddingRight: "10%",
    backgroundColor: "#151515"
  },
  item: {
    width: 100,
    height: 100
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
});

function Pitch() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={6} sm={3} className={classes.item}>
          <img
            className={classes.img}
            alt="service"
            src="https://uploads.codesandbox.io/uploads/user/1a5985a1-0a7f-42b3-81c2-3703197c8d42/2at_-leanero-Unlimt-accesss-545x99.png"
          />
        </Grid>
        <Grid item xs={6} sm={3} className={classes.item}>
          <img
            className={classes.img}
            alt="service"
            src="https://uploads.codesandbox.io/uploads/user/1a5985a1-0a7f-42b3-81c2-3703197c8d42/acZ8-Leanero-Anytime-anyplace-592x99.png"
          />
        </Grid>
        <Grid item xs={6} sm={3} className={classes.item}>
          <img
            className={classes.img}
            alt="service"
            src="https://uploads.codesandbox.io/uploads/user/1a5985a1-0a7f-42b3-81c2-3703197c8d42/xt9F-learnero-Exp-teachers-687x99.png"
          />
        </Grid>
        <Grid item xs={6} sm={3} className={classes.item}>
          <img
            className={classes.img}
            alt="service"
            src="https://uploads.codesandbox.io/uploads/user/1a5985a1-0a7f-42b3-81c2-3703197c8d42/K43G-learnero-Stdt-forms-521x99.png"
          />
        </Grid>
      </Grid>
    </div>
  );
}
export default Pitch;
