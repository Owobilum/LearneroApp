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
    backgroundColor: "#1A1A1A"
  },
  item: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
});

function Services() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item xs={6} sm={3} className={classes.item}>
          <img
            className={classes.img}
            alt="service"
            src="https://uploads.codesandbox.io/uploads/user/1a5985a1-0a7f-42b3-81c2-3703197c8d42/8r_N-service1.png"
          />
        </Grid>
        <Grid item xs={6} sm={3} className={classes.item}>
          <img
            className={classes.img}
            alt="service"
            src="https://uploads.codesandbox.io/uploads/user/1a5985a1-0a7f-42b3-81c2-3703197c8d42/D9ZE-service2.png"
          />
        </Grid>
        <Grid item xs={6} sm={3} className={classes.item}>
          <img
            className={classes.img}
            alt="service"
            src="https://uploads.codesandbox.io/uploads/user/1a5985a1-0a7f-42b3-81c2-3703197c8d42/TXDB-service3.png"
          />
        </Grid>
        <Grid item xs={6} sm={3} className={classes.item}>
          <img
            className={classes.img}
            alt="service"
            src="https://uploads.codesandbox.io/uploads/user/1a5985a1-0a7f-42b3-81c2-3703197c8d42/CKOw-service4.png"
          />
        </Grid>
      </Grid>
    </div>
  );
}
export default Services;
