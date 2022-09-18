import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import {
  EventsList,
  FavoriteEvents,
  Login,
  Register,
  AboutUs,
  NotFound,
  AddEvents,
  UserPage,
} from "screens";
import { PrivateRoute } from "components";
import { useAuthContext } from "contexts";

import "./App.css";

function App() {
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={FavoriteEvents} />
        <Route exact path="/favorite-events" component={FavoriteEvents} />
        <Route exact path="/events" component={EventsList} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route
          exact
          path="/login"
          render={(props) => {
            if (user) return <Redirect to="/" />;

            return <Login {...props} />;
          }}
        />
        <Route
          exact
          path="/register"
          render={(props) => {
            if (user) return <Redirect to="/" />;

            return <Register {...props} />;
          }}
        />
        <PrivateRoute exact path="/add-events" component={AddEvents} />
        <PrivateRoute exact path="/user" component={UserPage} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
