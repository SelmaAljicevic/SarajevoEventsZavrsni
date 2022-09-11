import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./screens/HomePage/homepage";
import ThingsToDo from "./screens/ThingsToDo/thingstodo";
import Events from "./screens/Events/events";
import Hotels from "./screens/Hotels/hotels";
import Parks from "./screens/Parks/parks";
import Sports from "./screens/Sports/sports";
import Cinema from "./screens/Cinema/cinema";
import Theatre from "./screens/Theatre/theatre";
import History from "./screens/History/history";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/thingstodo" component={ThingsToDo}></Route>
        <Route exact path="/events" component={Events}></Route>
        <Route exact path="/hotels" component={Hotels}></Route>
        <Route exact path="/parks" component={Parks}></Route>
        <Route exact path="/sports" component={Sports}></Route>
        <Route exact path="/cinema" component={Cinema}></Route>
        <Route exact path="/theatre" component={Theatre}></Route>
        <Route exact path="/history" component={History}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
