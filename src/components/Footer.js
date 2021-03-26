import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import BlogpostCard from "./BlogpostCard";
const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: "10%",
    paddingRight: "10%",
    // backgroundImage: 'linear-gradient(to right, #e78946, #d64a2b)',
    backgroundImage: 'linear-gradient(to right, #D5472A,#CC4737,#CC4737,#D5472A)'
  },
  socials: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingTop: 16
  },
  heading: {
    paddingBottom: 16,
    fontSize: 16
  },
  heading1: {
    paddingBottom: 16
  },
  text: {
    color: "lightgrey"
  }
});

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="flex-start"
        spacing={2}
      >
        <Grid item xs={12} sm={4} className={classes.item}>
          <Link to="/">
            <Typography
              variant="h6"
              color="secondary"
              component="h3"
              className={classes.heading1}
            >
              Accelerate
            </Typography>
          </Link>
          <Typography variant="body2" className={classes.text} component="p">
            Grow your business with accelerate by creating seamless payment experiences for your customers.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.item}>
          <Typography
            variant="h6"
            color="secondary"
            component="h3"
            className={classes.heading}
          >
            PRIVACY & TOS
          </Typography>
            <Link to="/" className={classes.text}>
              Privacy Policy
            </Link>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.item}>
          <Typography
            variant="h6"
            color="secondary"
            component="h3"
            className={classes.heading}
          >
            CONTACT US
          </Typography>
          <Typography variant="body2" className={classes.text} component="p">
              No. 4 Madiana Close, Off Daar Es Salaam Street, <br />
              Wuse 2 , Abuja.<br />
              09030009930 <br />
              hello@accelerate.ng
            </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
export default Footer;
