import React from "react";
import Hero from "../components/Hero";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Header";
import Services from "../components/Services";
import CategoriesTop from "../components/CategoriesTop";
import CategoriesBottom from "../components/CategoriesBottom";
import RecentCourses from "../components/RecentCourses";
import Pitch from "../components/Pitch";
import Pricing from "../components/Pricing";
import Instructor from "../components/Instructor";
import Social from "../components/Social";
import Footer from "../components/Footer";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "#151515"
  },
  main: {
    position: "relative",
    zIndex: 1,
    marginBottom: 350
  },
  footer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    minHeight: 200,
    color: "#fff",
    zIndex: -1
  }
});

function Home() {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");
  let main = matches ? classes.main : null;
  let footer = matches ? classes.footer : null;
  return (
    <div className={classes.root}>
      <div className={main}>
        <Header />
        <Hero />
        <Services />
        <CategoriesTop />
        <CategoriesBottom />
        <RecentCourses />
        <Pitch />
        <Pricing />
        <Instructor />
        <Social />
      </div>
      <div className={footer}>
        <Footer />
      </div>
    </div>
  );
}
export default Home;
