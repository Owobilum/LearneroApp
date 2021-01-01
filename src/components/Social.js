import React from "react";
import { Grid, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#1A1A1A",
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
  },
  socials: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 48
  },
  icon: {
    paddingRight: 16
  }
}));

export default function Social() {
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
            Follow us on social media!
          </Typography>
        </Grid>
      </Grid>
      <Divider className={classes.divider} variant="middle" />

      <div className={classes.socials}>
        <Link to="/" className={classes.icon}>
          <FacebookIcon color="secondary" />
        </Link>
        <Link to="/" className={classes.icon}>
          <InstagramIcon color="secondary" />
        </Link>
        <Link to="/" className={classes.icon}>
          <LinkedInIcon color="secondary" />
        </Link>
      </div>
    </div>
  );
}
