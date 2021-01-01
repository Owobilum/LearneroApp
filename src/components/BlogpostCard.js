import React from "react";
import { Typography, Grid, Card, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingBottom: 16,
    maxWidth: "100%"
  },
  itemImg: {
    maxWidth: 100
  },
  itemText: {
    maxWidth: 150,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  card: {
    width: 80,
    borderRadius: 0
  },
  media: {
    height: 90
  }
}));

function BlogpostCard(props) {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="flex-start"
      className={classes.container}
      spacing={1}
    >
      <Grid item className={classes.itemImg}>
        <Card className={classes.card}>
          <Link to={props.url}>
            <CardMedia
              className={classes.media}
              image={props.img}
              title="Blog Article"
            />
          </Link>
        </Card>
      </Grid>
      <Grid item className={classes.itemText}>
        <Link to={props.url}>
          <Typography variant="h6" color="secondary" component="h3">
            {props.title}
          </Typography>
          <Typography variant="caption" color="secondary" component="h3">
            {props.date}
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
}
export default BlogpostCard;
