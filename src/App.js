import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import {
  Events,
  FavoriteEvents,
  Login,
  Register,
  AboutUs,
  NotFound,
  AddEvents,
} from "screens";
import { PrivateRoute } from "components";

import "./App.css";
import { useAuthContext } from "contexts";

function App() {
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={FavoriteEvents} />
        <Route exact path="/favorite-events" component={FavoriteEvents} />
        <Route exact path="/events" component={Events} />
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
        <Route exact path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
