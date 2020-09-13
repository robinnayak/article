import React from "react";
import { Route, Switch } from "react-router-dom";
import Articlelist from "./Articlelist";
import Articledetail from "./Articledetail";
import Add from "./component/pages.jsx/Add";
import Edit from "./component/pages.jsx/Edit";
import Delete from "./component/pages.jsx/Delete";
import Error from "./Error.jsx";

export default function Base() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Articlelist} />
        <Route exact path="/Add" component={Add} />
        <Route exact path="/detail/:articleID" component={Articledetail} />
        <Route exact path="/Edit/:id" component={Edit} />
        <Route exact path="/Add/Deletee" component={Delete} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}
