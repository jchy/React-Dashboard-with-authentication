import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Settings from "../pages/Settings";
import UserDetails from "../pages/UserDetails";
import PrivateRoute from "./PrivateRoute";

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <PrivateRoute exact={true} path="/dashboard">
          <Dashboard />
          {/* <Settings /> */}
        </PrivateRoute>
        <PrivateRoute exact={true} path="/dashboard/settings">
          <Settings />
        </PrivateRoute>
        <PrivateRoute exact={true} path="/dashboard/settings/userdetails">
          <UserDetails />
        </PrivateRoute>
      </Switch>
    </>
  );
}

export default Routes;
