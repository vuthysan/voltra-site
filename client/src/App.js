import React from "react";
import { Switch, Route } from "react-router-dom";
import Index from "./components/index";
import "./App.css";

import Footer from "./components/layouts/footer";
import Contact from "./components/contact";
import Order from "./components/order";
import Try from "./components/try";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact={true} component={Index} />
        <Route path="/contact-us" exact={true} component={Contact} />
        <Route path="/order" exact={true} component={Order} />
        <Route path="/try" exact={true} component={Try} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
