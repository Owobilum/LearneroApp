import * as React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  List,
  ListItem,
  ListItemText,
  Hidden,
  Typography
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

const useStyles = makeStyles((theme) => ({
  topToolbarContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  logo: {
    maxWidth: 160,
    paddingTop: 15
  },
  bottomToolBar: {
    backgroundColor: "#151515"
  },
  appBar: {
    zIndex: 10000,
    backgroundColor: "#333333"
  },
  bottomToolBarContent: {
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
    color: `white`
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
  { title: `courses`, path: `/` },
  { title: `about us`, path: `/` },
  { title: `meet the team`, path: `/` },
  { title: `blog`, path: `/` },
  { title: `contact us`, path: `/` }
];

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="relative" className={classes.appBar}>
      <Toolbar
        variant="dense"
        disableGutters={true}
        className={classes.topToolBar}
      >
        <Container maxWidth="lg" className={classes.topToolbarContent}>
          <Link to="/">
            <Button
              color="inherit"
              className={classes.button}
              startIcon={<PersonIcon fontSize="small" />}
            >
              Login
            </Button>
          </Link>
          <Typography>|</Typography>
          <Link to="/">
            <Button color="inherit" className={classes.button}>
              Register
            </Button>
          </Link>
        </Container>
      </Toolbar>

      <Toolbar variant="regular" className={classes.bottomToolBar}>
        <Container maxWidth="lg" className={classes.bottomToolBarContent}>
          <Link to="/">
            <img
              src="https://uploads.codesandbox.io/uploads/user/1a5985a1-0a7f-42b3-81c2-3703197c8d42/0Cgk-learnero-logo.png"
              alt="logo"
              className={classes.logo}
            />
          </Link>
          <Hidden smDown>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navList}
            >
              {navLinks.map(({ title, path }, index) => (
                <Link to={path} key={title} className={classes.linkText}>
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                </Link>
              ))}

              <div className={classes.searchArea}>
                <Link to="/" className={classes.favorite}>
                  <FavoriteBorderIcon />
                </Link>
                <Link to="/search" className={classes.search}>
                  <SearchIcon />
                </Link>
              </div>
              <div className={classes.socials}>
                <Link to="/">
                  <FacebookIcon color="secondary" />
                </Link>
                <Link to="/">
                  <InstagramIcon color="secondary" />
                </Link>
                <Link to="/">
                  <LinkedInIcon color="secondary" />
                </Link>
              </div>
            </List>
          </Hidden>
          <Hidden mdUp>
            <MobileNav navLinks={navLinks} />
          </Hidden>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
