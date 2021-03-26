import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import heroImg from "../img/hero.png"

  const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    // width: "100vw",
    // backgroundColor: "#151515"
    backgroundImage: 'linear-gradient(to right, #e78946, #d64a2b)',
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 48,
    paddingRight:32
  },
  hero: {
    width: "100%",
    paddingTop: 50
  },
  flex:{
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-between',
    justifyContent: 'space-around',
    paddingTop: 50
  },
  bright:{
    color: '#00FFFF'
  },
  adText:{
    color: 'white',
    fontWeight: 'bold'
  },
  navLink:{
    backgroundImage: 'linear-gradient(to right, #e78946, #d64a2b)',
    border: "solid 1px white",
    width: 250,
    borderRadius: 30,
    padding: '8px 3px',
    marginBottom: 5,
    // color: 'white',
  },
  navBtn:{
    color: 'white',
    width: '100%',
    transition: theme.transitions.create(
      ["color"],
      {
        duration: theme.transitions.duration.complex
      }
    ),
    "&:hover": {
      color: '#484848'
    }
  }
}));
function Hero() {
  const classes = useStyles();
  return (
    <>
        <Grid container className={classes.root}>
          <Grid item xs={12} sm={6} className={classes.flex}>
            <Typography variant="h6" component="h1" className={classes.bright}> - Receive Payments for Anything & Everything</Typography>
            <Typography variant="h3" className={classes.adText}>
              Grow your business <br/> with accelerate by <br/>creating 
              seamless <br /> payment experiences <br /> for <span className={classes.bright}>customers</span>
            </Typography>
            <Link to="/" className={classes.navLink}>
                <Button variant="filled" className={classes.navBtn}>Create Free Account</Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src={heroImg}              
              alt="hero"
              className={classes.hero}
            />
          </Grid>
        </Grid>
    </>
  );
}
export default Hero;
