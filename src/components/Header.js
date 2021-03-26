import * as React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  List,
  ListItem,
  ListItemText,
  Hidden,
  Typography,
  useScrollTrigger,
  Fab,
  Zoom
} from "@material-ui/core";
import { makeStyles, Button } from "@material-ui/core";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PersonIcon from "@material-ui/icons/Person";
import logoImg from "../img/accelerate-logo.png"
// import useScrollTrigger from '@material-ui/core/useScrollTrigger';
// import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
// import Zoom from '@material-ui/core/Zoom';
import '../styles.css';

const useStyles = makeStyles((theme) => ({
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
    paddingTop: 25
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
  appBar: {
    position: "fixed",
    zIndex: 10000,
    backgroundColor: "#DC6336"
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
  }
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

// ScrollTop.propTypes = {
//   children: PropTypes.element.isRequired,
//   window: PropTypes.func,
// };



const Header = () => {
  const classes = useStyles();

  return (
    <>
    {/* <AppBar position="relative" className={classes.appBar}> */}
      <AppBar className={classes.appBar}>
   
      <Toolbar variant="regular" className={classes.toolBar}>
        <Container maxWidth="lg" className={classes.toolBarContent}>
          <Link to="/" className={classes.homeLink}>
            <img
              src={logoImg}
              alt="logo"
              className={classes.logo}
            />
            <Typography variant="h5" className={classes.logoText}>Accelerate</Typography>
          </Link>
          <Hidden smDown>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navList}
            >
              {navLinks.map(({ title, path }, index) => (
                <Link to={path} key={title} className={classes.navLinkText}>
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
    <Toolbar id="back-to-top-anchor"/>
        {/* <ScrollTop {...props}> */}
        <ScrollTop >
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
  
};
export default Header;
