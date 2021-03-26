import React from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({

  container: {
    maxWidth: "100%",
    paddingTop: 60,
    paddingBottom: 60,
    backgroundColor: "#D5472A",
  },
  title:{
    fontWeight: "bold",
    textAlign: "center"
  },
  card: {
    // maxWidth: 400,
    width: '90%',
    transition: theme.transitions.create(["transform"], {
      duration: theme.transitions.duration.standard
    }),
    "&:hover": {
      transform: "scale(1.01)"
    }
  },
  heading:{
    textAlign: "center",
    // margin: "20px 4px",
    color: "#fff"
  },
  headingCaption: {
    textAlign: "center",
    // margin: "20px 4px",
    color: "lightgrey",
    // marginBottom: 60
  },
  grid:{
    // border: 'solid black',
    padding: 48
    // maxWidth: '100%'
  },
  gridItem:{
    // border: 'solid red',
    marginBottom: 32
    // maxWidth: '400'
  }

}));

export default function OurServices() {
  const classes = useStyles();

  // SERVICES CARDS
  const servicesData = [

    {
      title: "CARD PAYMENTS",
      content: "Digital business knows no borders and its financial infrastructure has to be super flexible to keep in tune with innovations. This is why accelerates solution supports both offline and online card payments services. The online aspects allow for businesses to receive card payments on their website or via payment links while the offline aspect provides physical POS terminals to businesses and mobile money agents to bridge the transactional payment gap of money collections, in terms of cash out, transfers,withdrawals, and payment for every day goods and services."
    },
    {
      title: "USSD PAYMENTS",
      content: "On Accelerate, the USSD codes of all commercial banks are aggregated and this makes it convenient for your customers to pay for goods and services using their bank’sUSSD codes. USSD technology is harmonious with all GSM phones and does not require internet data."
    },
    {
      title: "BANK TRANSFER",
      content: "In the bank transfer model, a unique account number is generated for every transaction which allows customers to transfer funds to that account number for goods and services. The Merchant does not have to wait for a bank alert as Merchant receives a notification immediately. At a specified time, Merchant account is settled appropriately."
    },
    {
      title: "CASHOUT VIA USSD",
      content: "Did you know customers can collect cash from their bank accounts at location without their ATM cards? Yes! All they need are their banks’ specific USSD codes.This feature solves a major financial challenge of cash withdrawals for customers who do not own bank cards. Also bypasses the technicalities and network dependence ofPOS devices."
    },
  ];

  const serviceCards = servicesData.map((service, index) => (
    <React.Fragment key={service.title + index}>
      <Grid item xs={12} sm={6} className={classes.gridItem}>
          <Link to="/">
            <Card
              className={classes.card}
              style={{
                // maxWidth: 400,
                // height: "100%",
                // paddingBottom: 32,
                borderRadius: 10
              }}
            >
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  className={classes.title}
                >
                  {service.title}
                </Typography>
                <Typography variant="body1" component="h2" color="textSecondary">
                  {service.content}
                </Typography>
              </CardContent>
            </Card>
          </Link>
      </Grid>
    </React.Fragment>
  ));

  return (
      <div className={classes.container}>
        <Typography variant="h6" className={classes.heading}>OUR SERVICES</Typography>
        <Typography variant="h5" className={classes.heading}>Our Core Services</Typography>
        <Typography variant="body1" className={classes.headingCaption} color="textSecondary">We offer the following services.</Typography>

        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
        //   spacing={1}
          className={classes.grid}
        >
          {serviceCards}
        </Grid>
      </div> 
  );
}
