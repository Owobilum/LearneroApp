import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "#151515"
  },
  hero: {
    width: "100%"
  }
});

function Hero() {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <img
              src="https://uploads.codesandbox.io/uploads/user/1a5985a1-0a7f-42b3-81c2-3703197c8d42/fKy5-leanero-hero.png"
              alt="hero"
              className={classes.hero}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
export default Hero;
