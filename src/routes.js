import React from "react";
import { Switch, Route } from "react-router-dom";
import Form from "./Components/Form/Form";
import TodoList from "./Components/TodoList/TodoList";
import TaskEdit from "./Components/TaskEdit/TaskEdit";
import TaskEditWithHooks from "./Components/TaskEdit/TaskEditWithHooks";

export default (
  <Switch>
    <Route exact path="/" component={TodoList} />
    <Route path="/form" component={Form} />
    {/* <Route path="/taskedit/:id" component={TaskEdit} /> */}
    <Route path="/newtaskedit/:id" component={TaskEditWithHooks} />
  </Switch>
);
