import React from "react";
import { Switch, Route } from "react-router-dom";
import Form from "./Components/Form/Form";
import TodoList from "./Components/TodoList/TodoList";

export default (
  <Switch>
    <Route exact path="/" component={TodoList} />
    <Route path="/form" component={Form} />
  </Switch>
);
