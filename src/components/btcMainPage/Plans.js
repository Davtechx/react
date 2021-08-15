import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Icon from "@material-ui/core/Icon";
import StarIcon from "@material-ui/icons/StarBorder";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import AddShoppingCartSharpIcon from "@material-ui/icons/AddShoppingCartSharp";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Checkout from "../checkout/Checkout";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
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
}));

const styles = (theme) => ({
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const tiers = [
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
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function Plans(props) {
  const classes = useStyles();
  const { post } = props;
  console.log("post");
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab
            Tab
            icon={<AccountBoxIcon />}
            label="Investment PLans"
            {...a11yProps(0)}
          />
          <Tab
            Tab
            icon={<AccountTreeIcon />}
            label="Mining Plans"
            {...a11yProps(1)}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
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
                    <Card elevation={12}>
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
                        <Button
                          variant={tier.buttonVariant}
                          endIcon={<AddShoppingCartSharpIcon />}
                        >
                          {tier.buttonText}
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
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
                        <Button
                          variant={tier.buttonVariant}
                          endIcon={<AddShoppingCartSharpIcon />}
                        >
                          {tier.buttonText}
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Grid>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

export default Plans;
