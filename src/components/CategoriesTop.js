import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container } from "@material-ui/core";

const useStyles = makeStyles({
  topgrid: {
    width: "100%",
    backgroundColor: "#151515",
    paddingTop: 20
  },
  serviceImg: {
    width: "100%"
  }
});

function CategoriesTop() {
  const classes = useStyles();
  return (
    <Container>
      <Grid container className={classes.topgrid}>
        <Grid item xs={12}>
          <img
            src="https://uploads.codesandbox.io/uploads/user/1a5985a1-0a7f-42b3-81c2-3703197c8d42/GEoA-leanero-pitch.png"
            alt="hero"
            className={classes.serviceImg}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
export default CategoriesTop;
