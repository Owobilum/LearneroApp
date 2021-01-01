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
    backgroundColor: "#000000",
    zIndex: 1
  },
  socials: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingTop: 16
  },
  heading: {
    paddingBottom: 16
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
        <Grid item xs={12} sm={3} className={classes.item}>
          <Typography
            variant="h5"
            color="secondary"
            component="h3"
            className={classes.heading}
          >
            About
          </Typography>
          <Typography variant="body2" color="secondary" component="p">
            Learnero is an online global platform that connects learners and
            instructors in a wide range of extracurricular activities. We aim to
            bring back fun and be a passionate escape from your usual routine.
            Learn at any time, any place at your own pace!
          </Typography>
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
        </Grid>
        <Grid item xs={12} sm={3} className={classes.item}>
          <Typography
            variant="h5"
            color="secondary"
            component="h3"
            className={classes.heading}
          >
            Contact
          </Typography>
          <a href="mailto:#" className={classes.icon}>
            learneroit@gmail.com
          </a>
          <br />
          <a href="mailto:#" className={classes.icon}>
            support@learnero.co
          </a>
          <br />
          <a href="mailto:#" className={classes.icon}>
            instructors@learnero.co
          </a>
          <br />
          <a href="mailto:#" className={classes.icon}>
            careers@learnero.co
          </a>
          <br />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.item}>
          <Typography
            variant="h5"
            color="secondary"
            component="h3"
            className={classes.heading}
          >
            Quick links
          </Typography>
          <ul>
            <li>
              <Link to="/" className={classes.icon}>
                Courses
              </Link>
            </li>
            <li>
              <Link to="/" className={classes.icon}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/" className={classes.icon}>
                Meet the Team
              </Link>
            </li>
            <li>
              <Link to="/" className={classes.icon}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/" className={classes.icon}>
                Contact Us
              </Link>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={3} className={classes.item}>
          <Typography
            variant="h5"
            color="secondary"
            component="h3"
            className={classes.heading}
          >
            Blog
          </Typography>
          <BlogpostCard
            title="Learnero's Top 100 Study Tips"
            img="https://uploads.codesandbox.io/uploads/user/1a5985a1-0a7f-42b3-81c2-3703197c8d42/0uRI-learnero-blog-1.png"
            date="- December 30, 2020"
            url="/"
          />
          <BlogpostCard
            title="The Future of Technology"
            img="https://uploads.codesandbox.io/uploads/user/1a5985a1-0a7f-42b3-81c2-3703197c8d42/drFj-learnero-blog-2.jpg"
            date="- December 31, 2020"
            url="/"
          />
        </Grid>
      </Grid>
    </div>
  );
}
export default Footer;
