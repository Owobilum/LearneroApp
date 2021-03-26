import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import {Typography, Grid} from '@material-ui/core';
import aboutImg from "../img/about-2.png"

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "100%",
    paddingTop: 60,
    paddingLeft: 48,
    paddingRight: 48,
    marginBottom: 60,
    marginTop: 40,
    
  },
  heading:{
    textAlign: "center",
    color: '#d64a2b',
    fontWeight: "bold",
    paddingBottom: 16
  },
  subhead: {
    paddingBottom: 60,
    textAlign: "center"
  },
  about: {
    width: "90%",
    paddingTop: 50
  },
  // square: {
  //   border: "solid red",
  //   marginTop: 16,
  //   backgroundImage: 'linear-gradient(to right, #e78946, #d64a2b)',
  //   borderRadius: 20
  // }
}));

const Accordion = withStyles({
  root: {
    // border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    color: "#fff",
    backgroundImage: 'linear-gradient(to right, #e78946, #d64a2b)',
    borderRadius: 20,
    // backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: 20,
    // minHeight: 56,
    // '&$expanded': {
    //   minHeight: 56,
    // },
    minHeight: 70,
    '&$expanded': {
      minHeight: 70,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    color: "grey",
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function Faq() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={classes.container}>
      <Typography variant="h6" className={classes.heading}>Our Platform FAQ</Typography>
      <Typography variant="h4" className={classes.subhead}>Frequently Asked Questions</Typography>

      <Grid container
        direction="row"
        spacing={3}
      >
        <Grid item xs={12} sm={6}>
          <img
                src={aboutImg}              
                alt="about"
                className={classes.about}
          />
        </Grid>


        <Grid item xs={12} sm={6}>
          <div>
            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>How do I verify that the transaction is successful?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Transaction verification is automatic so a response showing the status of the transaction will be displayed within minutes. Alternatively, transaction status can be confirmed by clicking on the validate transaction button.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                <Typography>After confirming transaction is unsuccessful yet the customer is debited, how will the customer get a refund?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The customer should be advised to contact their bank for a reversal
                </Typography>
              </AccordionDetails>
              </Accordion>
              <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                  <Typography>What if the customer hasn’t registered the ussd banking method?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  Most banks have made it easy for customers to register for their USSD service by simply dialling the bank specific USSD and following the required prompt. Alternatively, the customer should be advised to use alternative methods such as card or bank transfer
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>What if the customers bank is not listed under the USSD method of payment?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  In this case the bank transfer method of payment can used for the customer to make a transfer.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>What happens if my transaction is successful but payment has not reflected?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                We have 24 hours a day, 7 days a week customer support always ready to help you.Please send us a message or call our support team to help resolve this
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>Why should I use the bank transfer method on Accelerate when I can easily give the customer my bank account number to make the payment?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                On Accelerate, instant verification of transactions can be done, which helps incase the owner of the account number is not available to verify the payment.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>How will I receive all the money that is collected through Accelerate?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We have a merchant dashboard where the merchant can enter the account number he or she wants the money to be paid into.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>Is it the same account number that is generated for every transaction for bank transfer?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  For every bank transfer transaction, a different account number is generated.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>When will I receive all the payments that has been collected?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Every payment collected on Accelerate is remitted at the end of the day
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel10'} onChange={handleChange('panel10')} className={classes.square}>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>Can I reprint receipt after the transaction?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Every transaction can be reprinted by going to your transaction summary and clicking on the reprint button.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </Grid>


      </Grid>

    </div>
  );
}
