import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import post1 from "./blog-post.1.md";
import post2 from "./blog-post.2.md";
import post3 from "./blog-post.3.md";
import Plans from "./Plans";
import LatestDeposits from "./LatestDeposits";
import Fab from "@material-ui/core/Fab";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import Hidden from "@material-ui/core/Hidden";
import "../../App.css";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(6),
  },
  planCard: {
    marginTop: theme.spacing(3),
  },
  swapIcon: {
    position: "relative",
    zIndex: 12,
    left: "86vh",
    top: "-15vh",
  },
  twak: {
    position: "fixed",
    zIndex: 3,
    top: "34%",
    left: "77%",
  },
  fabButton: {
    position: "fixed",
    zIndex: 3,
    top: "93%",
    left: "92%",
  },
}));

const sections = [
  { title: "Why BTC MetaTrade?", url: "#" },
  { title: "PLANS", url: "#" },
  { title: "Contact us", url: "#" },
];

const mainFeaturedPost = {
  title: "SPECTACULAR BITCOIN INVESTMENT",
  subheader: "PROFITS FOR ALL!",
  description:
    "BTC MetaTrade is a Bitcoin mining & investment company where you can be a part of the peer-to-peer bitcoin community worldwide. Our investment portal is an afterthought of mindful planning & guidance of technical experts to provide you the most profitable investment platform possible.",
  image: "https://source.unsplash.com/random",
  imageText: "main image description",
  linkText: "Continue reading…",
  buttonText: "Get Started",
};

const featuredPosts = [
  {
    title: "INVESTMENT PLANS",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
    buttonText: "Get Started",

    InvestPlans: [
      {
        title: "Basic",
        price: "0",
        description: ["MINIMUM: $50", "MAXIMUM: $500", "INSTANT PAYMENT"],
        buttonText: "CHOOSE PLAN",
        buttonVariant: "outlined",
      },
      {
        title: "Premium",
        subheader: "Most popular",
        price: "15",
        description: ["MINIMUM: $50", "MAXIMUM: $500", "INSTANT PAYMENT"],
        buttonText: "CHOOSE PLAN",
        buttonVariant: "contained",
      },
      {
        title: "Standard",
        price: "30",
        description: ["MINIMUM: $50", "MAXIMUM: $500", "INSTANT PAYMENT"],
        buttonText: "CHOOSE PLAN",
        buttonVariant: "outlined",
      },
    ],
  },
  {
    title: "MINING PLANS",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
    buttonText: "Get Started",

    MiningPlans: [
      {
        title: "Basic",
        price: "0",
        description: ["MINIMUM: $50", "MAXIMUM: $500", "INSTANT PAYMENT"],
        buttonText: "CHOOSE PLAN",
        buttonVariant: "outlined",
      },
      {
        title: "Premium",
        subheader: "Most popular",
        price: "15",
        description: ["MINIMUM: $50", "MAXIMUM: $500", "INSTANT PAYMENT"],
        buttonText: "CHOOSE PLAN",
        buttonVariant: "contained",
      },
      {
        title: "Standard",
        price: "30",
        description: ["MINIMUM: $50", "MAXIMUM: $500", "INSTANT PAYMENT"],
        buttonText: "CHOOSE PLAN",
        buttonVariant: "outlined",
      },
    ],
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Header title="BTC MetaTrade" sections={sections} />

      <MainFeaturedPost post={mainFeaturedPost} />
      <Card
        style={{
          // <Grid style={{ height: "100vh", position: "absolute" }}></Grid>
          marginTop: "100vh",
          backgroundColor: "#eec0c6",
          backgroundImage: "linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%)",
          // background:
          //   "linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),linear-gradient(336deg, rgba(64, 214, 241, 1), rgba(0,0,255,0) 70.71%)",
        }}
      >
        <Container
          // style={{
          //   zIndex: 3,
          //   marginTop: "100vh",
          // }}
          maxWidth="lg"
        >
          <main>
            <Card className={classes.planCard}>
              <Grid container spacing={4}>
                {featuredPosts.map((post) => (
                  <FeaturedPost key={post.title} post={post} />
                ))}
                <Grid className={classes.swapIcon}>
                  <Hidden smDown>
                    <SwapHorizIcon />
                  </Hidden>
                </Grid>
              </Grid>
              <Grid>
                <Plans post={featuredPosts} />
              </Grid>
            </Card>
            <Grid>
              <LatestDeposits />
            </Grid>
            <Grid container spacing={5} className={classes.mainGrid}>
              <Main title="From the firehose" posts={posts} />
              <Sidebar
                title={sidebar.title}
                description={sidebar.description}
                archives={sidebar.archives}
                social={sidebar.social}
              />
            </Grid>
            <div
              className={classes.twak}
              id="tawk_5f7d2d824704467e89f54659"
            ></div>
            <Fab
              variant="extended"
              color="secondary"
              aria-label="edit"
              className={classes.fabButton}
            >
              {"CHAT  "}
              <LiveHelpIcon />
            </Fab>
          </main>
        </Container>
      </Card>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </React.Fragment>
  );
}
