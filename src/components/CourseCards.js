import React from "react";
import {
  Popover,
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  Button,
  Grid,
  Container,
  Typography,
  IconButton
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import CoursePopoverCards from "./CoursePopoverCards";
const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: "none"
  },
  container: {
    marginTop: 48
  },
  link: {
    textDecoration: "none"
  },
  bottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 16
  },
  showBtnBox: {
    marginTop: 48,
    paddingBottom: 64
  },
  showBtn: {
    borderRadius: "40%"
  }
}));

export default function CourseCards() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  // COURSE CARDS
  const courseData = [
    {
      title: "Data Science >",
      description: "Python for Data Science and Machine Learning bootcamp",
      price: "$125",
      rating: "",
      url: "/",
      img:
        "https://uploads.codesandbox.io/uploads/user/1a5985a1-0a7f-42b3-81c2-3703197c8d42/skny-learnero12.jpg"
    },
    {
      title: "Apache >",
      description: "Web Coding and Apache Basics",
      price: "",
      rating: "",
      url: "/",
      img:
        "https://uploads.codesandbox.io/uploads/user/1a5985a1-0a7f-42b3-81c2-3703197c8d42/e-7V-learnero11.jpg"
    },
    {
      title: "temporary",
      description: "Testing",
      price: "",
      rating: "",
      url: "/",
      img:
        "https://uploads.codesandbox.io/uploads/user/1a5985a1-0a7f-42b3-81c2-3703197c8d42/Nmwx-learnero16.jpg"
    },
    {
      title: "",
      description: "Learnero",
      price: "Free",
      rating: "",
      url: "/",
      img:
        "https://uploads.codesandbox.io/uploads/user/1a5985a1-0a7f-42b3-81c2-3703197c8d42/iiVp-learnero15.jpg"
    },
    {
      title: "C++ >",
      description: "Engine Creating for XBox One X",
      price: "$68",
      rating: "",
      url: "/",
      img:
        "https://uploads.codesandbox.io/uploads/user/1a5985a1-0a7f-42b3-81c2-3703197c8d42/S0J2-learnero13.jpg"
    },
    {
      title: "Software Development >",
      description: "Console Development Basic with Unity",
      price: "$80",
      rating: "",
      url: "/",
      img:
        "https://uploads.codesandbox.io/uploads/user/1a5985a1-0a7f-42b3-81c2-3703197c8d42/gVx--learnero14.jpg"
    }
  ];

  const courseCards = courseData.map((course, index) => (
    <React.Fragment key={course.img + index}>
      <Grid item xs={12} sm={4}>
        <Link to={course.url} className={classes.link}>
          <Card
            style={{
              maxWidth: 345,
              height: "100%",
              paddingBottom: 32,
              borderRadius: 0
            }}
          >
            <CardMedia
              style={{ height: 140 }}
              image={course.img}
              title={course.title}
            />
            <CardHeader
              action={
                <IconButton
                  aria-label="more"
                  aria-owns={open ? "mouse-over-popover" : undefined}
                  aria-haspopup="true"
                  onMouseEnter={handlePopoverOpen}
                  onMouseLeave={handlePopoverClose}
                >
                  <MoreVertIcon />
                </IconButton>
              }
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {course.title}
              </Typography>
              <Typography variant="h6" component="h2">
                {course.description}
              </Typography>
            </CardContent>
            <div className={classes.bottom}>
              <Typography variant="caption" color="primary">
                {course.rating}
              </Typography>
              <Typography variant="caption" color="primary">
                {course.price}
              </Typography>
            </div>
          </Card>
        </Link>
      </Grid>

      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "right"
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        {/* POPOVER CARDS */}
        <CoursePopoverCards title={course.title} />
      </Popover>
    </React.Fragment>
  ));

  return (
    <div>
      <Container className={classes.container}>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="stretch"
          spacing={3}
        >
          {courseCards}
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          className={classes.showBtnBox}
        >
          <Button
            variant="contained"
            className={classes.showBtn}
            color="primary"
            size="large"
          >
            Show All
          </Button>
        </Grid>
      </Container>
    </div>
  );
}
