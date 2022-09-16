import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AboutUs } from "screens/AboutUs/AboutUs";

import Events from "screens/Events/Events";
import FavoriteEvents from "screens/FavoriteEvents/FavoriteEvents";
import { Login } from "screens/Login/Login";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={FavoriteEvents} />
        <Route exact path="/favorite-events" component={FavoriteEvents} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
