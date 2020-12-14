import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "../components/about-us/AboutUsScreen";
import { ChampScreen } from "../components/champs/ChampScreen";
import { HomeScreen } from "../components/home/HomeScreen";
import { Footer } from "../components/ui/Footer";
import { Navbar } from "../components/ui/Navbar";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <hr style={{ height: 1 }} />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/champs" component={ChampScreen} />
          <Route exact path="/about-us" component={AboutUs} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};
