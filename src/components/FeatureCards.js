import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  Button,
  Grid,
  Container,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  // popover: {
  //   pointerEvents: "none"
  // },
  container: {
    marginTop: 48
  },
  // link: {
  //   textDecoration: "none"
  // },
  bottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 16
  },
  title:{
    fontWeight: "bold"
  }
  // showBtnBox: {
  //   marginTop: 48,
  //   paddingBottom: 64
  // },
  // showBtn: {
  //   borderRadius: "40%"
  // }
}));

export default function FeatureCards() {
  const classes = useStyles();

  // FEATURE CARDS
  const featureData = [

    {
      title: "Dedicated Customer Support 24/7",
      content: "At Accelerate we understand the frustrations associated with not being able to have questions and queries resolved on time. We have a team that is adequately equipped and is readily available, round the clock, to attend to every of your queries via various channels of communication. We understand that this will further enhance our Merchants business reputation,generate repeat business and provide competitive advantage gotten from providing excellent customer service."
    },
    {
      title: "Same day remittance",
      content: "Accelerate offers same day transaction settlements which removes the problem of liquidity for small, and medium sized businesses. Collected funds are credited within the day to ensure speedy deals, yielding business relationships and hassle-free solutions.With same day remittances, you are assured more cash in hand for your business,hence more volume. In addition, same day remittances ensure speedy transactions, productive business relationships, and peace of mind.",
    },
    {
      title: "Email notifications",
      content: "For easy monitoring and confirmation of settlements, an automated email receipt is sent to the merchant as soon as the collection is confirmed.**for the fact that the emails stay in the mailbox for an indefinite period, a record of transactions can easily be generated",
    },
    {
      title: "Robust dashboard with analytics",
      content: "Our dashboard is designed to provide a bird-eye view of transactions, with an array of sales analyses and performance reports to provide easy trail",
    },
    {
      title: "Customer Retention",
      content: "One satisfied customer is an integral component of sustainable business relationships and we are proud to have our customers as brand ambassadors. We understand that our customers are the best asset we have and we have been able to win their loyalty to our products and services",
    },
    {
      title: "Multiple Access Channels",
      content: "Merchants enjoy maximum flexibility by switching accesses from both mobile and desktop platforms concurrently without restrictions whilst enjoying the same service delivery on either of the platforms chosen",
    },
    {
      title: "Instant Confirmation",
      content: "As we aim to provide a safe and secure platform, an instant verification feature is provided for merchants to verify concluded payments within minutes. This further protects our merchants from fraudsters.",
    },
    {
      title: "Audit trail and Transaction History Reporting",
      content: "Merchants can access and generate transactions summary for any period via mobile and Desktop Applications, for easy tracking and auditing. A comprehensive report is sent to merchants on daily, weekly, or monthly basis depending on the scheduled period of delivery",
    },
  ];

  const featureCards = featureData.map((feature, index) => (
    <React.Fragment key={feature.title + index}>
      <Grid item xs={12} sm={4}>
        {/* <div className={classes.link}> */}
          <Card
            style={{
              maxWidth: 345,
              height: "100%",
              paddingBottom: 32,
            }}
          >
            <CardHeader
          
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                className={classes.title}
              >
                {feature.title}
              </Typography>
              <Typography variant="body1" component="h2" color="textSecondary">
                {feature.content}
              </Typography>
            </CardContent>
            {/* <div className={classes.bottom}>
              <Typography variant="caption" color="primary">
                {course.rating}
              </Typography>
              <Typography variant="caption" color="primary">
                {course.price}
              </Typography>
            </div> */}
          </Card>
        {/* </div> */}
      </Grid>
    </React.Fragment>
  ));

  return (
    <div>
      <Container className={classes.container}>
        <Grid
          container
          direction="row"
          // justify="space-around"
          justify="flex-start"
          alignItems="stretch"
          spacing={3}
        >
          {featureCards}
        </Grid>
        {/* <Grid
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
        </Grid> */}
      </Container>
    </div>
  );
}
