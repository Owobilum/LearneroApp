import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Button
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  btnBox: {
    display: "flex",
    justifyContent: "center"
  },
  btn: {
    width: "80%"
  }
}));

export default function CoursePopoverCards(props) {
  const classes = useStyles();

  const handleClicked = (event) => {
    console.log("Content was Clicked");
  };

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              JP
            </Avatar>
          }
          title="Jose Portilla"
        />

        <CardContent>
          <Typography variant="h5" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet consectetur adipiscing elit
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </Typography>
        </CardContent>
        <CardActions className={classes.btnBox}>
          <Button
            variant="contained"
            className={classes.btn}
            size="large"
            onClick={handleClicked}
          >
            Try Now
          </Button>
        </CardActions>
        <CardActions>
          <IconButton aria-label="add to wishlist">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}
