import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import FeatureCards from "./FeatureCards";
import registerImg from "../img/registerCircle.png"
import dashboardImg from "../img/dashboard.png"
import devicesImg from "../img/devices.jpg"

const useStyles = makeStyles({
  root: {
    // maxWidth: "100%",
    width: "100%",
    paddingTop: 60,
    paddingLeft: 48,
    paddingRight: 48,
    // paddingBottom: 50,
    // paddingLeft: "48",
    // paddingRight: "10%",
    // backgroundColor: "#fff",
    // marginTop: 60
  },
  item: {
    width: '100%',
    padding: '16px 64px',
    textAlign: 'center'
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  heading:{
    color: '#d64a2b',
    fontWeight: 'bold'
  },
  subhead:{
    fontWeight: 'bold'
  },
  content:{
    width: '100%',
    color: "grey",
    fontSize: 16
  },
  regItem:{
    width: '100%',
    // padding: '16px 64px',
    display: 'flex',
    flexDirection: 'row',
    maxWidth: 500,
  },
  imgBckgd:{
    width: 80,
    height: 80,
    borderRadius: '50%',
    backgroundImage: 'linear-gradient(to right, #e78946, #d64a2b)',
    marginRight: 16,
    // background: '#d64a2b',
    paddingTop: 5,
  },
  bottomGrid:{
    // marginTop: 40,
    paddingTop: 50,
    paddingBottom: 50
  },
  bottomImg: {
    margin: "auto",
    display: "block",
    // maxWidth: "100%",
    maxWidth: 500,
    maxHeight: "100%",
  },
  ourChannels:{
    paddingTop: 50,
    paddingBottom:50,
  },
  channelItem:{
    // maxWidth: 400
    position: 'relative'
  },
  channelItemImg:{
    position: 'absolute',
    left: 100,
    // bottom: 10,
    top: -95,
    width:400,
    height: 250
  },
  channelList:{
    minWidth: 400,
    backgroundImage: 'linear-gradient(to right, #E0F0FF, #F5F4FF)',
    // padding: '50px 10px 90px 50px'
    paddingLeft: 150,
    paddingRight: 0,
    paddingTop: 200,
    paddingBottom: 50,

  },
  tickIcon:{
    color: "#d64a2b",
    fontSize: 60,
    // paddingTop: 32
  },
  tickText:{
    marginLeft: 16,
    // paddingBottom: 32,
    fontSize: 24
  },
  a:{
    display:'flex',
    flexDirection: 'row',
    alignItems:"center"
    // justifyContent: 'space-around'
  },

});

function Features() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
                                    {/* Our Features */}
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="center"
      >
        <Grid item xs={12} className={classes.item}>
          <Typography variant="h6" className={classes.heading} >OUR FEATURES</Typography><br/>
          <Typography className={classes.subhead} variant="h4">Why Choose Us</Typography><br/>
          <Typography variant="body1" className={classes.content}>
            Give your customers more options to pay with.<br />
            Stop losing sales due to avoidable payment related issues. 
            Accept payment any way you want and give your customers options. 
            Using Accelerates provides your customers with more ways to pay 
            for goods, services and receive cash. With our card payment, 
            USSD payment, bank transfer and cash-out via USSD, customers are 
            provided with a multi-faceted and versatile payment platform that 
            offers substitute, safe and easier ways for payment exchange
          </Typography>
        </Grid>
        <Grid item xs={12}  className={classes.item}>
          <FeatureCards/>
        </Grid>
      </Grid>
      <Grid container
        direction="row"
        className={classes.bottomGrid}
        justify="space-around"
        alignItems="center">
        <Grid item xs={12} sm={6}  className={classes.regItem}>
            <div className={classes.imgBckgd}>
                <img
                    className={classes.img}
                    alt="register"
                    src={registerImg}
                  />
            </div>
            <div>
              <Typography className={classes.subhead}>Register / Login To Our Platform</Typography><br />
              <Typography variant="body1" color="textSecondary">Click above to register/login and start receiving payment for anything and everything.</Typography>
            </div>
        </Grid>
        <Grid item xs={12} sm={6}> 
        <img
         className={classes.bottomImg}
          alt="register"
          src={dashboardImg}
        />
        </Grid>
      </Grid>

                                            {/* Our Channels */}
        <Grid container
              direction="row"
              justify="space-around"
              alignItems="center"
              className={classes.ourChannels}
        >
          <Grid item xs={4} className={classes.channelItem}>
            <img
            alt="devices"
            src={devicesImg}
            className={classes.channelItemImg}
          />
          </Grid>
          <Grid item xs={8} className={classes.channelList}>
            <Typography className={classes.heading}>Our Channels</Typography><br/>
            <Typography className={classes.subhead} variant="h6"> 
              You can receive payments via any of the channels below
           </Typography><br/>
           <div className={classes.a}>
            <div className={classes.tickIcon}><CheckCircleOutlineIcon fontSize="inherit"/></div>
            <div className={classes.tickText}> Web</div>
           </div>
           <div className={classes.a}>
            <div className={classes.tickIcon}><CheckCircleOutlineIcon fontSize="inherit"/></div>
            <div className={classes.tickText}> Mobile</div>
           </div>
           <div className={classes.a}>
            <div className={classes.tickIcon}><CheckCircleOutlineIcon fontSize="inherit"/></div>
            <div className={classes.tickText}> Desktop</div>
           </div>
           <div className={classes.a}>
            <div className={classes.tickIcon}><CheckCircleOutlineIcon fontSize="inherit"/></div>
            <div className={classes.tickText}> API</div>
           </div>
          </Grid>
        </Grid>

    </div>
  );
}
export default Features;
