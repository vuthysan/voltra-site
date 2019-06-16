import React from "react";
import { Switch, Route } from "react-router-dom";
import Index from "./components/index";
import "./App.css";

import Footer from "./components/layouts/footer";
import Contact from "./components/contact";
import Order from "./components/order";
import Try from "./components/try";
import FAQ from "./components/faq";
import Model from "./components/model";
import Story from "./components/story";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact={true} component={Index} />
        <Route path="/contact-us" exact={true} component={Contact} />
        <Route path="/order" exact={true} component={Order} />
        <Route path="/try" exact={true} component={Try} />
        <Route path="/faq" exact={true} component={FAQ} />
        <Route path="/model" exact={true} component={Model} />
        <Route path="/our-story" exact={true} component={Story} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
