import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
    paddingTop: 100
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `black`
  },
  searchIcon: {
    paddingLeft: "15px"
  }
});

const TopDrawer = ({ navLinks }) => {
  const classes = useStyles();
  const [state, setState] = useState({ top: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ [anchor]: open });
  };

  const TopDrawerList = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List component="nav">
        {navLinks.map(({ title, path }) => (
          <Link to={path} key={title} className={classes.linkText}>
            <ListItem button>
              <ListItemText primary={title} />
            </ListItem>
          </Link>
        ))}
        <Link to="/search" className={classes.searchIcon}>
          <SearchIcon color="primary" />
        </Link>
      </List>
    </div>
  );

  return (
    <div>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={
          !state.top ? toggleDrawer("top", true) : toggleDrawer("top", false)
        }
      >
        <Menu fontSize="large" style={{ color: `white` }} />
      </IconButton>

      <Drawer
        anchor="top"
        open={state.top}
        onOpen={toggleDrawer("top", true)}
        onClose={toggleDrawer("top", false)}
      >
        {TopDrawerList("top")}
      </Drawer>
    </div>
  );
};
export default TopDrawer;
