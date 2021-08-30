import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import BtcMainPage from "./btcMainPage/BtcMainPage";
import Checkout from "./checkout/Checkout";
import SignIn from "./sign-in/SignIn";
import SignUp from "./sign-up/SignUp";
import Dashboard from "./dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={BtcMainPage} />
      <Route path="/plans" component={SignIn} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/aboutus" component={Checkout} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/contactus" component={SignIn} />
    </BrowserRouter>
  );
}

export default App;
