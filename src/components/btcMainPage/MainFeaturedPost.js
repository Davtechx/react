import * as React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Link from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import ThreeD from "./threeD";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "fixed",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(0),
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
    height: "100vh",

    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    // marginTop: theme.spacing(6),
  },

  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    marginTop: "25vh",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

function MainFeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <React.Fragment>
      <Paper
        className={classes.mainFeaturedPost}
        style={{
          zIndex: -1,
          backgroundImage: `url(${post.image})`,
        }}
      >
        {/* Increase the priority of the hero background image */}
        {
          <img
            style={{ display: "none" }}
            src={post.image}
            alt={post.imageText}
          />
        }
        <div className={classes.overlay} />
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                <CardHeader
                  variant="h3"
                  color="inherit"
                  title={post.title}
                  subheader={post.subheader}
                />
              </Typography>
              <CardContent>
                <Typography variant="h5" color="inherit" paragraph>
                  {post.description}
                </Typography>
              </CardContent>
            </div>
          </Grid>

          {/* <Grid
            item
            md={6}
            alignItem="buttom"
            style={{
              // <Grid style={{ height: "100vh", position: "absolute" }}></Grid>
              position: "relative",
              zIndex: 3,

              // margiTop: "10vh",
              // width: "100wh",
              // height: "90vh",
            }}
          >
            <Hidden smDown>
              <Card
                elevation={12}
                style={{
                  // <Grid style={{ height: "100vh", position: "absolute" }}></Grid>

                  alignItems: "center",
                  width: "100wh",
                  height: "90vh",
                }}
              >
                <ThreeD />
              </Card>
            </Hidden>
          </Grid> */}
        </Grid>
      </Paper>
    </React.Fragment>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainFeaturedPost;
