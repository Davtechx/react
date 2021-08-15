import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Btc MetaTrade
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  
  Plans: {
    backgroundImage:
      "linear-gradient(to top, rgba(255,0,0,0), rgba(41,63,80,1))",
  },

}));
const footers = [
  {
    title: "BtcMetaTrade",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "QuickAccess",
    description: [
      "Terms & Conditions",
      "Blog",
      "FAQs",
      "About us",
      "Privacy",
      "Cookie Policy",
    ],
  },
];

function Footer(props) {
  const classes = useStyles();

    return (
      <>
        <Container  className={classes.footer}>  
          <Grid container direction='row' spacing={8} >
            <Grid item xs={4} className={classes.Plans}></Grid>
            <Grid item xs={4} className={classes.Plans}></Grid>
            <Grid item xs={4} className={classes.Plans}></Grid>
            <Grid item xs={4} className={classes.Plans}></Grid>
          </Grid>
          <Box mt={5}>
          <div id='tawk_5f7d2d824704467e89f54659'></div>

            <Copyright />
          </Box>
        </Container>
        {/* End footer */}
      </>
    );
}

export default Footer;