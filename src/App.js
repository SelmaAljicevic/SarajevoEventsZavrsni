import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AboutUs } from "screens/AboutUs/AboutUs";

import Events from "screens/Events/Events";
import FavoriteEvents from "screens/FavoriteEvents/FavoriteEvents";
// import ThingsToDo from "./screens/ThingsToDo/thingstodo";
// import Events from "./screens/Events/events";
// import Hotels from "./screens/Hotels/hotels";
// import Parks from "./screens/Parks/parks";
// import Sports from "./screens/Sports/sports";
// import Cinema from "./screens/Cinema/cinema";
// import Theatre from "./screens/Theatre/theatre";
// import History from "./screens/History/history";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={FavoriteEvents} />
        <Route exact path="/favorite-events" component={FavoriteEvents} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/about-us" component={AboutUs} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
