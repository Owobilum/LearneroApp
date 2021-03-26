import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {
  Container,
  List,
  ListItem,
  ListItemText,
  Hidden,} from '@material-ui/core'
import logoImg from "../img/accelerate-logo.png"
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
// import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CategoriesTop from "../components/CategoriesTop";
import Services from "../components/Services";
import OurServices from "../components/OurServices";
import Faq from "../components/Faq"
import CategoriesBottom from "../components/CategoriesBottom"
import RecentCourses from "../components/RecentCourses";
import Pitch from "../components/Pitch";
import Pricing from "../components/Pricing";
import Instructor from "../components/Instructor";
import Social from "../components/Social";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";
import { Link } from "react-router-dom"
import { TrendingUpOutlined } from '@material-ui/icons';



const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  topToolBar: {
    maxHeight: 30
  },
  topToolbarContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  navLink:{
    backgroundImage: 'linear-gradient(to right, #e78946, #d64a2b)',
    border: "solid 1px white",
    borderRadius: 5,
    padding: '8px 3px',
    marginRight: 5,
    // color: 'white',
    transition: theme.transitions.create(
      ["background", "background-color", "border"],
      {
        duration: theme.transitions.duration.complex
      }
    ),
    "&:hover": {
      background: "#e78946",
      border: 'none'
    }
  },
  navLinkText: {
    textDecoration: `none`,
    textTransform: `capitalize`,
    color: `white`,
    marginTop: 5,
  },
  navLinkText2: {
    textDecoration: `none`,
    textTransform: `capitalize`,
    color: `black`,
    marginTop: 5,
  },
  navBtn:{
    color: 'white'
  },
  logo: {
    // maxWidth: 25,
    // width: 28,
    // height: 16,
    paddingTop: 15
  },
  logoText:{
    paddingTop: 25,
    color:'white'
  },
  logoText2:{
    paddingTop: 25,
    color:'black'
  },
  homeLink:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // border: 'solid red',
    margin: 0,
    padding: 0,
    width: 200

  },
  toolBar: {
    backgroundImage: 'linear-gradient(to right, #e78946, #d64a2b)',
    // backgroundColor: "#DC6336",
    // backgroundColor: "#DC6135",
    height: 80
  },
  toolBar2: {
    // backgroundImage: 'linear-gradient(to right, #e78946, #d64a2b)',
    backgroundColor: "#D7DFEF",
    // backgroundColor: "#DC6135",
    height: 80
  },
  appBar: {
    position: "fixed",
    zIndex: 10000,
    backgroundColor: "#DC6336",
    maxWidth: '100%',
  },
  toolBarContent: {
    display: `flex`,
    justifyContent: `space-between`
  },
  navList: {
    display: `flex`,
    justifyContent: `space-between`
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
    border: "solid red"
  },
  topflex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: `space-between`
  },
  searchArea: {
    paddingTop: 12
  },
  favorite: {
    marginRight: 10,
    marginLeft: 10,
    color: "grey"
  },
  search: {
    marginLeft: 10,
    marginRight: 40,
    paddingTop: 12,
    paddingLeft: 2,
    color: "red",
    border: "solid red",
    transition: theme.transitions.create(
      ["background", "background-color", "color"],
      {
        duration: theme.transitions.duration.complex
      }
    ),
    "&:hover": {
      backgroundColor: "red",
      color: "white"
    }
  },
  socials: {
    paddingTop: 12
  },
  button: {
    textTransform: "none",
    fontSize: 12,
    color: "white"
  },
  head: {
    width: "100%",
    // width: "100vw",
    // backgroundColor: "#151515"
    backgroundImage: 'linear-gradient(to right, #e78946, #d64a2b)',
    paddingTop: 40 
  },
  home: {
    width: "100%",
    // width: "100vw",
    // backgroundColor: "#151515"
    backgroundImage: 'linear-gradient(to right, #e78946, #d64a2b)',
    paddingTop: 40 
  },
  // out:{
  //   border: 'solid red',
  //   width: '100%'
  // },
  // in:{
  //   border: 'solid black'
  // }

}));



const navLinks = [
  { title: `Home`, path: `/` },
  { title: `About Us`, path: `/` },
  { title: `Pricing`, path: `/` },
];

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
    // setColor(true)
    // localStorage.setItem('color',color)
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}

      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function Home(props) {
  const [color,setColor]=useState(true)
  const classes = useStyles();

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      let scrollPosition=document.documentElement.scrollTop
      scrollPosition === 0 ? setColor(true) : setColor(false)
    })
  },[color])

  return (
    <React.Fragment className={classes.home}>
      <CssBaseline />
      <AppBar className={classes.appBar}> 
        <Toolbar variant="regular" className={color ? classes.toolBar: classes.toolBar2}>
          <Container maxWidth="lg" className={classes.toolBarContent}>
            <Link to="/" className={classes.homeLink}>
              <img
                src={logoImg}
                alt="logo"
                className={classes.logo}
              />
              <Typography variant="h5" className={color ? classes.logoText: classes.logoText2 }>Accelerate</Typography>
            </Link>
            <Hidden smDown>
              <List
                component="nav"
                aria-labelledby="main navigation"
                className={classes.navList}
              >
                {navLinks.map(({ title, path }, index) => (
                  <Link to={path} key={title} className={color ? classes.navLinkText: classes.navLinkText2 }>
                    <ListItem button>
                      <ListItemText primary={title} />
                    </ListItem>
                  </Link>
                ))}

                <div className={classes.searchArea}>
                  <Link to="/" className={classes.navLink}>
                    <Button variant="filled" className={classes.navBtn} >Log In</Button>
                    {/* <button className={classes.navLink}>Log In</button> */}
                  </Link>
                  <Link to="/" className={classes.navLink}>
                    <Button variant="filled" className={classes.navBtn}>Signup</Button>
                  </Link>
                  {/* <Link to="/search" className={classes.search}>
                    <Button>Sign Up</Button>
                  </Link> */}
                </div>
              </List>
            </Hidden>
            <Hidden mdUp>
              <MobileNav navLinks={navLinks} />
            </Hidden>
          </Container>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <div> 
        {/* <Box my={2}> */}
          {/* <div className={classes.root}> */}
          {/* <div> */}
            <div className={classes.in}> 
              {/* <Header /> */}
              <Hero />
              <Features />
              {/* <CategoriesTop /> */}
              {/* <Services /> */}
              <OurServices />
              <Faq/>
              {/* <CategoriesBottom /> */}
              {/* <RecentCourses /> */}
              {/* <Pitch />
              <Pricing />
              <Instructor />
              <Social /> */}
            </div>
            {/* <div className={footer}> */}
            <div>
              <Footer />
            </div>
          {/* </div> */}

        {/* </Box> */}
      </div>
      <ScrollTop {...props}>
        <Fab color="secondary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUpIcon fontSize="large"/>
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
