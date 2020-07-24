import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Template/Header";
import Footer from "./components/Template/Footer";
import Home from "./pages/Home";
import CourseProfile from "./pages/CourseProfile";

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/bootcamps/:id" component={CourseProfile} />
      <Route path="*" component={Home} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default Routes;
