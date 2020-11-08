import React from "react";
import MainView from "./containers/list-card";
import CreateEditContainer from "./containers/create-edit";
import CartView from "./containers/cart";
import { Switch, Route } from "react-router-dom";
import RootComponent from "./HOC/rootComponentWrapper";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainView} />
        <Route exact path="/createView" component={CreateEditContainer} />
        <Route exact path="/editView/:id" component={CreateEditContainer} />
        <Route exact path="/cartView" component={CartView} />
      </Switch>
    </div>
  );
}

export default RootComponent(App);
