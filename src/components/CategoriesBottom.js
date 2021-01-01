import React from "react";
import {
  Grid,
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#151515"
  },
  card: {
    maxWidth: 800,
    backgroundColor: "#151515",
    transition: theme.transitions.create(["background-color", "transform"], {
      duration: theme.transitions.duration.standard
    }),
    "&:hover": {
      transform: "scale(1.03)"
    }
  },
  media: {
    height: 175
  },
  mediaTypeTwo: {
    height: 405
  },
  contents: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  lastrow: {
    marginTop: 16
  }
}));

const YourCard = ({ url, title }) => {
  const classes = useStyles();
  return (
    <Card
      className={classes.card}
      variant="outlined"
      style={{ height: "100%" }}
    >
      <div>
        <CardMedia className={classes.media} image={url} title={title} />
        <CardContent className={classes.contents}>
          <Typography variant="body2" color="primary">
            {title}
          </Typography>
          <Typography variant="body2" color="primary">
            5 Courses
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default function CategoriesBottom() {
  const classes = useStyles();
  return (
    <Container>
      <Grid
        container
        spacing={1}
        direction="row"
        justify="center"
        alignItems="stretch"
        className={classes.root}
      >
        <Grid item xs={12} sm={8}>
          <Grid style={{ height: "100%" }}>
            <Link to="/">
              <Card
                className={classes.card}
                variant="outlined"
                style={{ height: "100%" }}
              >
                <div>
                  <CardMedia
                    className={classes.mediaTypeTwo}
                    image="https://uploads.codesandbox.io/uploads/user/1a5985a1-0a7f-42b3-81c2-3703197c8d42/jQEZ-learnero-art.jpeg"
                    title="Art"
                  />
                  <CardContent className={classes.contents}>
                    <Typography variant="body2" color="primary">
                      Art
                    </Typography>
                    <Typography variant="body2" color="primary">
                      8 Courses
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Link to="/">
                <YourCard
                  url="https://uploads.codesandbox.io/uploads/user/1a5985a1-0a7f-42b3-81c2-3703197c8d42/wv-r-learnero-exercise.jpg"
                  title="Exercise"
                />
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Link to="/">
                <YourCard
                  url="https://uploads.codesandbox.io/uploads/user/1a5985a1-0a7f-42b3-81c2-3703197c8d42/6Sna-learnero-MD.jpg"
                  title="Material Design"
                />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={1} className={classes.lastrow}>
        <Grid item xs={12} sm={4}>
          <Link to="/">
            <YourCard
              url="https://uploads.codesandbox.io/uploads/user/1a5985a1-0a7f-42b3-81c2-3703197c8d42/p3sY-learnero-music.jpeg"
              title="Music"
            />
          </Link>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Link to="/">
            <YourCard
              url="https://uploads.codesandbox.io/uploads/user/1a5985a1-0a7f-42b3-81c2-3703197c8d42/buma-learnero-photography.jpg"
              title="Photography"
            />
          </Link>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Link to="/">
            <YourCard
              url="https://uploads.codesandbox.io/uploads/user/1a5985a1-0a7f-42b3-81c2-3703197c8d42/WJVS-learnero-SDev.jpg"
              title="Software Development"
            />
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}
