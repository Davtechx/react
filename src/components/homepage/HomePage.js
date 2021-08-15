import { CardMedia, Paper } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import StarIcon from "@material-ui/icons/StarBorder";
import React from "react";

function Copyright(props) {
  return (
    <Typography variant="body2" color="textSecondary" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [
  {
    title: "Basic",
    price: "0",
    description: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
  {
    title: "Premium",
    subheader: "Most popular",
    price: "15",
    description: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
  },
  {
    title: "Standard",
    price: "30",
    description: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
      "Phone & email support",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
];

const footers = [
  {
    title: "Btc Metattrade",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one",
    ],
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource",
    ],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
];

export default function HomePage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Paper>
        <CssBaseline />
        <AppBar
          position="sticky"
          color="dark"
          elevation={4}
          className={classes.appBar}
        >
          <Toolbar>
            <Grid container alignItems="center">
              <Grid item justify="center" sm={3} outline="false">
                <Card >
                  <CardActions>
                    <svg
                      id="9fdfb632-c4bc-4710-962b-67f9c1c4b41d"
                      data-name="Btc Metatrade"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 379.89 66.64"
                    >
                      <title></title>
                      <path d="M1.85,14.59a7.18,7.18,0,0,1,5.31-1.86q5.56,0,13.66,4.61a76.71,76.71,0,0,1,16,12.48,76.66,76.66,0,0,1,12.5,16q4.63,8.09,4.63,13.65a6.55,6.55,0,0,1-7.21,7.21q-5.56,0-13.58-4.61a76.45,76.45,0,0,1-16-12.52,76.78,76.78,0,0,1-12.52-16Q0,25.46,0,19.9A7.19,7.19,0,0,1,1.85,14.59ZM35.12,49.71a18.59,18.59,0,0,1-11,4.76c-1.6.13-4.58.2-8.92.2H2.1L17.44,24.16H32.67a33.74,33.74,0,0,1,7.21.5c2.37.56,3.78,1.82,4.21,3.76a5.73,5.73,0,0,1-.65,3.85,13.77,13.77,0,0,1-6.72,6.06,4.3,4.3,0,0,1,2.66,4C39.38,44.72,38,47.17,35.12,49.71Zm-30-33.37a6.45,6.45,0,0,0-1.7,4.8q0,5,4.1,12.17A69.42,69.42,0,0,0,18.85,47.75,68.84,68.84,0,0,0,33.29,59q7.16,4.11,12.16,4.11A5.94,5.94,0,0,0,52,56.63q0-5-4.11-12.16A68.84,68.84,0,0,0,36.57,30,69.42,69.42,0,0,0,22.13,18.74Q15,14.65,10,14.64A6.47,6.47,0,0,0,5.16,16.34Zm24.5,27.21c-.27-.77-1.39-1.24-3.39-1.41-.3,0-1.58,0-3.83,0H17.51L14.4,48.15h5.81c2.1,0,3.3,0,3.6,0a9.36,9.36,0,0,0,4-1.06,5.1,5.1,0,0,0,1.5-1.5A2.36,2.36,0,0,0,29.66,43.55Zm4.66-12c-.23-.43-.83-.7-1.8-.8q-.9-.11-6.05-.1H23.21l-2.46,5h3.84c3.06,0,4.83,0,5.29-.1,2.2-.27,3.64-1.09,4.34-2.45A1.48,1.48,0,0,0,34.32,31.52Z" />
                      <path d="M50.25,14.59a7.18,7.18,0,0,1,5.31-1.86q5.56,0,13.65,4.61a76.2,76.2,0,0,1,16,12.48,76.33,76.33,0,0,1,12.5,16q4.64,8.09,4.64,13.65a6.55,6.55,0,0,1-7.22,7.21q-5.55,0-13.58-4.61a76.66,76.66,0,0,1-16-12.52A76.45,76.45,0,0,1,53,33.47q-4.56-8-4.56-13.57A7.19,7.19,0,0,1,50.25,14.59Zm3.31,1.75a6.46,6.46,0,0,0-1.71,4.8q0,5,4.11,12.17A69.36,69.36,0,0,0,67.24,47.75,69.15,69.15,0,0,0,81.69,59q7.16,4.11,12.16,4.11a5.93,5.93,0,0,0,6.5-6.51q0-5-4.1-12.16A68.91,68.91,0,0,0,85,30,68.91,68.91,0,0,0,70.52,18.74q-7.15-4.09-12.16-4.1A6.45,6.45,0,0,0,53.56,16.34ZM77.62,30.82l-12,24h-9l12.08-24H58l3.3-6.51H91.54l-3.31,6.51Z" />
                      <path d="M98.65,14.59A7.18,7.18,0,0,1,104,12.73q5.57,0,13.65,4.61a76.2,76.2,0,0,1,16,12.48,76.66,76.66,0,0,1,12.5,16q4.63,8.09,4.64,13.65a6.55,6.55,0,0,1-7.22,7.21q-5.55,0-13.58-4.61a76.41,76.41,0,0,1-16-12.52,76.45,76.45,0,0,1-12.52-16q-4.56-8-4.56-13.57A7.19,7.19,0,0,1,98.65,14.59ZM102,16.34a6.46,6.46,0,0,0-1.71,4.8q0,5,4.11,12.17a69.36,69.36,0,0,0,11.28,14.44A69.36,69.36,0,0,0,130.08,59q7.15,4.11,12.17,4.11a5.93,5.93,0,0,0,6.5-6.51q0-5-4.1-12.16A68.91,68.91,0,0,0,133.36,30a68.91,68.91,0,0,0-14.44-11.29q-7.15-4.09-12.16-4.1A6.45,6.45,0,0,0,102,16.34Zm21,36a26.35,26.35,0,0,1-11.24,2.43c-3.58,0-6.37-.73-8.4-2.18a7.12,7.12,0,0,1-3-6.14,16.07,16.07,0,0,1,2-7.16,29.2,29.2,0,0,1,10.87-11.88A28.23,28.23,0,0,1,128,23.26q6.87,0,9.57,3.3a6.2,6.2,0,0,1,1.15,4,19.19,19.19,0,0,1-.2,2.65l-9.82,1.71a7.13,7.13,0,0,0,.2-1.61q0-3.41-4.61-3.4-8.11,0-12.57,9A13.29,13.29,0,0,0,110,44.45c0,2.44,1.66,3.66,5,3.66q5.56,0,10.52-6.32l7.67,2.26A30.68,30.68,0,0,1,122.92,52.34Z" />
                      <path d="M189.43,39.54c-.25-4.71-.55-10.37-.5-14.58h-.15c-1.15,4-2.56,8.17-4.26,12.83l-6,16.38h-3.31l-5.46-16.08c-1.6-4.76-2.95-9.12-3.9-13.13h-.1c-.11,4.21-.36,9.87-.66,14.93l-.9,14.48h-4.15l2.35-33.76H168l5.76,16.33c1.4,4.15,2.56,7.86,3.41,11.37h.15c.85-3.41,2.05-7.12,3.55-11.37l6-16.33h5.55l2.11,33.76h-4.26Z" />
                      <path d="M203.86,43.05c.1,6,3.91,8.41,8.32,8.41a16,16,0,0,0,6.71-1.25l.75,3.16a19.66,19.66,0,0,1-8.06,1.5c-7.47,0-11.93-4.91-11.93-12.22S204,29.57,211,29.57c7.91,0,10,7,10,11.42a16.63,16.63,0,0,1-.15,2.06Zm12.93-3.16c.05-2.8-1.16-7.16-6.12-7.16-4.45,0-6.41,4.1-6.76,7.16Z" />
                      <path d="M231.82,23.16v7h6.31v3.36h-6.31V46.55c0,3,.85,4.71,3.3,4.71a9.82,9.82,0,0,0,2.56-.3l.2,3.31a10.79,10.79,0,0,1-3.91.6A6.12,6.12,0,0,1,229.21,53c-1.25-1.31-1.7-3.46-1.7-6.32V33.48h-3.76V30.12h3.76V24.31Z" />
                      <path d="M256.52,54.37l-.35-3.06H256a9,9,0,0,1-7.42,3.61c-4.91,0-7.41-3.46-7.41-7,0-5.87,5.21-9.07,14.57-9v-.5c0-2-.55-5.61-5.51-5.61a12.12,12.12,0,0,0-6.31,1.8l-1-2.9a15,15,0,0,1,8-2.16c7.41,0,9.21,5.06,9.21,9.92v9.07a34.2,34.2,0,0,0,.4,5.81ZM255.87,42c-4.81-.09-10.27.76-10.27,5.47a3.89,3.89,0,0,0,4.15,4.2,6,6,0,0,0,5.87-4.06,4.92,4.92,0,0,0,.25-1.4Z" />
                      <path d="M271.45,24.31H261.18v-3.7h25v3.7H275.86V54.37h-4.41Z" />
                      <path d="M287.53,37.69c0-2.86,0-5.31-.2-7.57h3.86l.15,4.76h.2a7.28,7.28,0,0,1,6.71-5.31,4.76,4.76,0,0,1,1.25.15v4.16a6.61,6.61,0,0,0-1.5-.15c-3.1,0-5.31,2.35-5.91,5.66a12.38,12.38,0,0,0-.2,2V54.37h-4.36Z" />
                      <path d="M317.09,54.37l-.35-3.06h-.15a9,9,0,0,1-7.41,3.61c-4.91,0-7.42-3.46-7.42-7,0-5.87,5.21-9.07,14.58-9v-.5c0-2-.55-5.61-5.51-5.61a12.07,12.07,0,0,0-6.31,1.8l-1-2.9a15,15,0,0,1,8-2.16c7.41,0,9.22,5.06,9.22,9.92v9.07a34.2,34.2,0,0,0,.4,5.81ZM316.44,42c-4.81-.09-10.27.76-10.27,5.47a3.9,3.9,0,0,0,4.16,4.2,6,6,0,0,0,5.86-4.06,4.59,4.59,0,0,0,.25-1.4Z" />
                      <path d="M348.75,18.8V48.11c0,2.15.05,4.61.2,6.26H345l-.2-4.21h-.1a9,9,0,0,1-8.27,4.76c-5.86,0-10.37-5-10.37-12.32-.05-8.07,5-13,10.87-13,3.71,0,6.21,1.75,7.32,3.71h.1V18.8ZM344.35,40a7.77,7.77,0,0,0-.2-1.85A6.49,6.49,0,0,0,337.78,33c-4.55,0-7.26,4-7.26,9.37,0,4.9,2.4,9,7.16,9a6.63,6.63,0,0,0,6.47-5.26,7.64,7.64,0,0,0,.2-1.9Z" />
                      <path d="M358.53,43.05c.1,6,3.9,8.41,8.31,8.41a15.93,15.93,0,0,0,6.71-1.25l.76,3.16a19.71,19.71,0,0,1-8.07,1.5c-7.46,0-11.92-4.91-11.92-12.22s4.31-13.08,11.37-13.08c7.92,0,10,7,10,11.42a16.63,16.63,0,0,1-.15,2.06Zm12.92-3.16c.05-2.8-1.15-7.16-6.11-7.16-4.46,0-6.41,4.1-6.76,7.16Z" />
                      <path d="M151.9,11.74a5.85,5.85,0,0,0,3,.84c1.7,0,2.69-.89,2.69-2.19s-.69-1.89-2.42-2.56c-2.1-.74-3.4-1.83-3.4-3.65,0-2,1.66-3.49,4.16-3.49a5.82,5.82,0,0,1,2.85.63l-.46,1.35a5.13,5.13,0,0,0-2.45-.61c-1.75,0-2.42,1-2.42,1.93,0,1.2.78,1.8,2.56,2.48,2.17.84,3.28,1.89,3.28,3.78S157.8,14,154.76,14a6.63,6.63,0,0,1-3.28-.82Z" />
                      <path d="M162.54,9.45a3,3,0,0,0,3.17,3.21,6,6,0,0,0,2.56-.48l.29,1.21a7.69,7.69,0,0,1-3.08.57,4.29,4.29,0,0,1-4.54-4.66c0-2.79,1.64-5,4.33-5,3,0,3.82,2.65,3.82,4.35a6,6,0,0,1-.06.78Zm4.93-1.2c0-1.07-.44-2.73-2.33-2.73a2.79,2.79,0,0,0-2.58,2.73Z" />
                      <path d="M177.77,13.42a6.2,6.2,0,0,1-2.66.54,4.39,4.39,0,0,1-4.6-4.72,4.7,4.7,0,0,1,5-4.91,5.58,5.58,0,0,1,2.33.48l-.38,1.3a3.88,3.88,0,0,0-1.95-.44,3.2,3.2,0,0,0-3.26,3.5,3.17,3.17,0,0,0,3.21,3.45,4.79,4.79,0,0,0,2.06-.46Z" />
                      <path d="M187.47,11.25c0,.95,0,1.79.08,2.52h-1.49l-.1-1.51h0a3.48,3.48,0,0,1-3,1.72c-1.45,0-3.19-.8-3.19-4.05V4.53h1.68V9.64c0,1.76.53,2.94,2.06,2.94a2.44,2.44,0,0,0,2.22-1.52,2.63,2.63,0,0,0,.15-.86V4.53h1.68Z" />
                      <path d="M190.26,7.41c0-1.09,0-2-.07-2.88h1.47l.05,1.81h.08a2.77,2.77,0,0,1,2.56-2,1.82,1.82,0,0,1,.48,0V6a2.52,2.52,0,0,0-.58-.06A2.36,2.36,0,0,0,192,8.06a4.46,4.46,0,0,0-.08.78v4.93h-1.66Z" />
                      <path d="M197.25,9.45a3,3,0,0,0,3.18,3.21,6,6,0,0,0,2.55-.48l.29,1.21a7.59,7.59,0,0,1-3.07.57,4.29,4.29,0,0,1-4.55-4.66c0-2.79,1.64-5,4.34-5,3,0,3.82,2.65,3.82,4.35a6,6,0,0,1-.06.78Zm4.93-1.2c0-1.07-.44-2.73-2.33-2.73a2.78,2.78,0,0,0-2.57,2.73Z" />
                      <path d="M211.66.9V13.77H210V.9Z" />
                      <path d="M214.7,7c0-1,0-1.74-.08-2.5h1.49l.1,1.52h0a3.4,3.4,0,0,1,3.06-1.73c1.28,0,3.26.76,3.26,3.93v5.52h-1.68V8.44c0-1.49-.55-2.73-2.13-2.73a2.39,2.39,0,0,0-2.26,1.72,2.57,2.57,0,0,0-.11.78v5.56H214.7Z" />
                      <path d="M225.7,4.53l1.82,5.19a24.42,24.42,0,0,1,.74,2.37h.06c.21-.77.48-1.53.78-2.37l1.8-5.19h1.75L229,13.77h-1.61l-3.51-9.24Z" />
                      <path d="M235,9.45a3,3,0,0,0,3.17,3.21,6.08,6.08,0,0,0,2.56-.48l.28,1.21a7.59,7.59,0,0,1-3.07.57,4.29,4.29,0,0,1-4.55-4.66c0-2.79,1.65-5,4.34-5,3,0,3.82,2.65,3.82,4.35a6,6,0,0,1-.06.78Zm4.92-1.2c0-1.07-.44-2.73-2.33-2.73A2.79,2.79,0,0,0,235,8.25Z" />
                      <path d="M243.39,12.05a4.48,4.48,0,0,0,2.22.67c1.22,0,1.79-.61,1.79-1.38s-.47-1.24-1.72-1.7C244,9.05,243.24,8.13,243.24,7c0-1.49,1.2-2.71,3.19-2.71a4.53,4.53,0,0,1,2.27.57l-.42,1.22a3.58,3.58,0,0,0-1.89-.53c-1,0-1.54.57-1.54,1.26s.55,1.1,1.75,1.56C248.21,9,249,9.82,249,11.19c0,1.62-1.26,2.77-3.46,2.77a5.31,5.31,0,0,1-2.6-.63Z" />
                      <path d="M253.21,1.87V4.53h2.41V5.81h-2.41v5c0,1.14.33,1.79,1.26,1.79a3.71,3.71,0,0,0,1-.11l.07,1.26A4.17,4.17,0,0,1,254,14a2.32,2.32,0,0,1-1.81-.71,3.4,3.4,0,0,1-.65-2.4v-5h-1.43V4.53h1.43V2.31Z" />
                      <path d="M257.51,7c0-1,0-1.74-.07-2.5h1.49L259,6.05h0a3.39,3.39,0,0,1,3.05-1.73c1.28,0,3.27.76,3.27,3.93v5.52H263.7V8.44c0-1.49-.55-2.73-2.14-2.73a2.37,2.37,0,0,0-2.25,1.72,2.28,2.28,0,0,0-.12.78v5.56h-1.68Z" />
                      <path d="M268.12,7c0-1,0-1.74-.08-2.5h1.47L269.59,6h.05a3.2,3.2,0,0,1,2.91-1.7,2.73,2.73,0,0,1,2.61,1.85h0a3.9,3.9,0,0,1,1-1.21,3.13,3.13,0,0,1,2-.64c1.23,0,3,.8,3,4v5.44h-1.64V8.54c0-1.78-.65-2.85-2-2.85a2.17,2.17,0,0,0-2,1.53,2.63,2.63,0,0,0-.14.84v5.71H273.9V8.23c0-1.47-.65-2.54-1.93-2.54a2.3,2.3,0,0,0-2.08,1.68,2.47,2.47,0,0,0-.13.82v5.58h-1.64Z" />
                      <path d="M285,9.45a3,3,0,0,0,3.17,3.21,6,6,0,0,0,2.55-.48l.29,1.21a7.59,7.59,0,0,1-3.07.57,4.29,4.29,0,0,1-4.55-4.66c0-2.79,1.64-5,4.34-5,3,0,3.82,2.65,3.82,4.35a6,6,0,0,1-.06.78Zm4.92-1.2c0-1.07-.44-2.73-2.33-2.73A2.78,2.78,0,0,0,285,8.25Z" />
                      <path d="M293.62,7c0-1,0-1.74-.08-2.5H295l.1,1.52h0a3.39,3.39,0,0,1,3.05-1.73c1.28,0,3.27.76,3.27,3.93v5.52h-1.68V8.44c0-1.49-.55-2.73-2.14-2.73a2.37,2.37,0,0,0-2.25,1.72,2.28,2.28,0,0,0-.12.78v5.56h-1.68Z" />
                      <path d="M306.17,1.87V4.53h2.41V5.81h-2.41v5c0,1.14.33,1.79,1.26,1.79a3.71,3.71,0,0,0,1-.11l.07,1.26A4.17,4.17,0,0,1,307,14a2.32,2.32,0,0,1-1.81-.71,3.4,3.4,0,0,1-.65-2.4v-5H303.1V4.53h1.43V2.31Z" />
                      <path d="M314.58,1.05A19.59,19.59,0,0,1,317.77.8a5.29,5.29,0,0,1,3.61,1.07,3.48,3.48,0,0,1,1.12,2.69,3.76,3.76,0,0,1-1,2.75,5.32,5.32,0,0,1-3.93,1.42,5.47,5.47,0,0,1-1.34-.12v5.16h-1.66Zm1.66,6.21a5.87,5.87,0,0,0,1.38.13c2,0,3.22-1,3.22-2.75s-1.2-2.52-3-2.52a7.49,7.49,0,0,0-1.57.13Z" />
                      <path d="M324.59.21h1.68V13.77h-1.68Z" />
                      <path d="M334.22,13.77l-.14-1.17H334A3.44,3.44,0,0,1,331.2,14a2.64,2.64,0,0,1-2.83-2.66c0-2.23,2-3.45,5.56-3.43V7.7a1.9,1.9,0,0,0-2.1-2.14,4.62,4.62,0,0,0-2.41.68L329,5.14a5.72,5.72,0,0,1,3-.82c2.82,0,3.51,1.92,3.51,3.78v3.45a13.6,13.6,0,0,0,.15,2.22ZM334,9.05c-1.84,0-3.92.29-3.92,2.08a1.49,1.49,0,0,0,1.59,1.61,2.3,2.3,0,0,0,2.23-1.55,1.66,1.66,0,0,0,.1-.54Z" />
                      <path d="M340.26,1.87V4.53h2.4V5.81h-2.4v5c0,1.14.32,1.79,1.26,1.79a3.68,3.68,0,0,0,1-.11l.08,1.26a4.22,4.22,0,0,1-1.49.23,2.33,2.33,0,0,1-1.82-.71,3.45,3.45,0,0,1-.65-2.4v-5h-1.43V4.53h1.43V2.31Z" />
                      <path d="M344.73,13.77v-8h-1.3V4.53h1.3V4.09A4.33,4.33,0,0,1,345.8.86,3.22,3.22,0,0,1,348.05,0a3.74,3.74,0,0,1,1.43.27l-.23,1.3a2.43,2.43,0,0,0-1.07-.21c-1.43,0-1.79,1.26-1.79,2.67v.5h2.23V5.81h-2.23v8Z" />
                      <path d="M358.25,9.07a4.52,4.52,0,0,1-4.6,4.91c-2.5,0-4.43-1.84-4.43-4.76,0-3.09,2-4.9,4.58-4.9S358.25,6.24,358.25,9.07Zm-7.33.1c0,2,1.16,3.55,2.8,3.55s2.81-1.51,2.81-3.59c0-1.57-.78-3.55-2.77-3.55S350.92,7.41,350.92,9.17Z" />
                      <path d="M360.38,7.41c0-1.09,0-2-.08-2.88h1.47l.06,1.81h.07a2.77,2.77,0,0,1,2.56-2,1.77,1.77,0,0,1,.48,0V6a2.31,2.31,0,0,0-2.83,2.1,5.79,5.79,0,0,0-.07.78v4.93h-1.66Z" />
                      <path d="M366.7,7c0-1,0-1.74-.08-2.5h1.47L368.17,6h.06a3.17,3.17,0,0,1,2.9-1.7,2.72,2.72,0,0,1,2.61,1.85h0a3.9,3.9,0,0,1,1-1.21,3.18,3.18,0,0,1,2.05-.64c1.22,0,3,.8,3,4v5.44h-1.64V8.54c0-1.78-.65-2.85-2-2.85a2.18,2.18,0,0,0-2,1.53,2.65,2.65,0,0,0-.13.84v5.71h-1.65V8.23c0-1.47-.65-2.54-1.93-2.54a2.31,2.31,0,0,0-2.08,1.68,2.47,2.47,0,0,0-.13.82v5.58H366.7Z" />
                    </svg>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item sm>
                {" "}
              </Grid>
              <Grid item>
                <Typography
                  variant="h2"
                  color="inherit"
                  align="center"
                  className={classes.toolbarTitle}
                ></Typography>
                <nav>
                  <Link
                    variant="button"
                    color="textPrimary"
                    href="#"
                    className={classes.link}
                  >
                    PLANS
                  </Link>
                  <Link
                    variant="button"
                    color="textPrimary"
                    href="#"
                    className={classes.link}
                  >
                    CONTACT US
                  </Link>
                </nav>
              </Grid>
              <Grid item>
                <Button
                  href="#"
                  endIcon={<ExitToAppIcon />}
                  className={classes.link}
                >
                  Account
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>

        {/* Hero unit */}
        <Grid container alignItems="center">
          <Grid item sm="7">
            <Container
              maxWidth="sm"
              component="main"
              className={classes.heroContent}
            >
              <Typography
                component="h1"
                variant="h1"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Btc MetaTrade
                <Typography
                  component="h2"
                  variant="h2"
                  align="center"
                  color="textPrimary"
                  gutterBottom
                >
                  Secure Investnment Platform
                </Typography>
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                component="p"
              >
                BTC MetaTrade is a Bitcoin mining &amp; investment company where
                you can be a part of the peer-to-peer bitcoin community
                worldwide. Our investment portal is an afterthought of mindful
                planning &amp; guidance of technical experts to provide you the
                most profitable investment platform possible.
              </Typography>
              <Button fullWidth="true" variant="outlined">
                Get STARTED
              </Button>
            </Container>
          </Grid>
          <Grid sm></Grid>
          <Grid item>
            <Button
              href="#"
              variant="outlined"
              endIcon={<ExitToAppIcon />}
              className={classes.link}
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
        {/* End hero unit */}
        <Grid container>
          <Grid item container sm={12}>
            <Paper square elevation={30}>
              <toolbar>
                <Grid item sm={6}>
                  <Button> Mining</Button>
                </Grid>
                <Grid item sm={6}>
                  <button>Investnment</button>
                </Grid>
              </toolbar>
            </Paper>
          </Grid>
          <Grid item sm={12}>
            <Container maxWidth="md" component="main">
              <Grid container spacing={5} alignItems="flex-end">
                {tiers.map((tier) => (
                  // Enterprise card is full width at sm breakpoint
                  <Grid
                    item
                    key={tier.title}
                    xs={12}
                    sm={tier.title === "Enterprise" ? 12 : 6}
                    md={4}
                  >
                    <Card>
                      <CardHeader
                        title={tier.title}
                        subheader={tier.subheader}
                        titleTypographyProps={{ align: "center" }}
                        subheaderTypographyProps={{
                          align: "center",
                        }}
                        action={tier.title === "Pro" ? <StarIcon /> : null}
                        className={classes.cardHeader}
                      />
                      <CardContent>
                        <div className={classes.cardPricing}>
                          <Typography
                            component="h2"
                            variant="h3"
                            color="textPrimary"
                          >
                            ${tier.price}
                          </Typography>
                          <Typography variant="h6" color="textSecondary">
                            /mo
                          </Typography>
                        </div>
                        <ul>
                          {tier.description.map((line) => (
                            <Typography
                              component="li"
                              variant="subtitle1"
                              align="center"
                              key={line}
                            >
                              {line}
                            </Typography>
                          ))}
                        </ul>
                      </CardContent>
                      <CardActions>
                        <Button fullWidth variant={tier.buttonVariant}>
                          {tier.buttonText}
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Grid>
        </Grid>

        {/* Footer */}
        <Container maxWidth="md" component="footer" className={classes.footer}>
          <Grid container spacing={4} justifyContent="space-evenly">
            {footers.map((footer) => (
              <Grid item xs={6} sm={3} key={footer.title}>
                <Typography variant="h6" color="textPrimary" gutterBottom>
                  {footer.title}
                </Typography>
                <ul>
                  {footer.description.map((item) => (
                    <li key={item}>
                      <Link href="#" variant="subtitle1" color="textSecondary">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>
          <Copyright sx={{ mt: 5 }} />
        </Container>
        {/* End footer */}
      </Paper>
    </React.Fragment>
  );
}
